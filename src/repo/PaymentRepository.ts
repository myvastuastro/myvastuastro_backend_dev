import PaymentModel from '../models/PaymentModel';

class PaymentRepository {
  static async createPayment(data: any) {
    const payment = new PaymentModel(data);
    return await payment.save();
  }

  static async findByOrderId(orderId: string) {
    return await PaymentModel.findOne({ razorpayOrderId: orderId });
  }

  static async updatePaymentStatus(orderId: string, update: any) {
    return await PaymentModel.findOneAndUpdate(
      { razorpayOrderId: orderId },
      { $set: update },
      { new: true }
    );
  }

  static async findAllByUser(userId: string) {
    return await PaymentModel.find({ userId }).populate('vastuAstrologerId');
  }
  static async getAllPayments() {
    return await PaymentModel.find({});
  }
  static async deletePayment(id: string) {
    return await PaymentModel.findByIdAndDelete(id);  
  }
  static async updatePaymentById(id: string, data: any) {
    return await PaymentModel.findByIdAndUpdate(id, data, { new: true }); 
  }
}

export default PaymentRepository;
