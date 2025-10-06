import Razorpay from 'razorpay';
import crypto from 'crypto';
import PaymentRepository from '../repo/PaymentRepository';

class PaymentService {
  private razorpay: Razorpay;

  constructor() {
    this.razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });
  }

  async createOrder(userId: string, vastuAstrologerId: string, amount: number) {
    const order = await this.razorpay.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: true
    });

    const payment = await PaymentRepository.createPayment({
      userId,
      vastuAstrologerId,
      amount,
      transactionId: order.id,
      paymentMethod: 'razorpay',
      razorpayOrderId: order.id,
    });

    return { order, payment };
  }

  async verifyPayment(details: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
  }) {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = details;

    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValid = generated_signature === razorpay_signature;

    const updateData = isValid
      ? {
          paymentStatus: 'completed',
          razorpayPaymentId: razorpay_payment_id,
          razorpaySignature: razorpay_signature,
        }
      : { paymentStatus: 'failed' };

    await PaymentRepository.updatePaymentStatus(razorpay_order_id, updateData);
    return isValid;
  }

  async getUserPayments(userId: string) {
    return await PaymentRepository.findAllByUser(userId);
  }


  async handleWebhookEvent(eventBody: Buffer, receivedSignature: string) {
    const expectedSignature = crypto
      .createHmac('sha256', process.env.RAZORPAY_WEBHOOK_SECRET!)
      .update(eventBody)
      .digest('hex');

    if (receivedSignature !== expectedSignature) {
      throw new Error('Invalid webhook signature');
    }

    const event = JSON.parse(eventBody.toString());
    
    if (event.event === 'payment.authorized') {
      const payment = event.payload.payment.entity;
  
      await PaymentRepository.updatePaymentStatus(payment.order_id, {
        paymentStatus: 'authorized',
        razorpayPaymentId: payment.id,
      });
  
    }

    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      await PaymentRepository.updatePaymentStatus(payment.order_id, {
        paymentStatus: 'captured',
        razorpayPaymentId: payment.id,
      });

      console.log('✅ Webhook handled: Payment captured');
    }

    if (event.event === 'payment.failed') {
      const payment = event.payload.payment.entity;
      await PaymentRepository.updatePaymentStatus(payment.order_id, {
        paymentStatus: 'failed',
        razorpayPaymentId: payment.id,
      });

      console.log('❌ Webhook handled: Payment failed');
    }

    return true;
  }


  async deleteUserPayments(id: string) {
    return await PaymentRepository.deletePayment(id);
  }

  async getAllUserPayments() {
    return await PaymentRepository.getAllPayments();
  }

  async updateAllUserPayments(id: string, data: any) {
    return await PaymentRepository.updatePaymentById(id, data);
  }
}

export default PaymentService;
