import { Request, Response } from 'express';
import PaymentService from '../services/PaymentService';
import { sendMailJob } from '../utils/sendMail';

const paymentService = new PaymentService();

export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, vastuAstrologerId, amount } = req.body;
    const result = await paymentService.createOrder(userId, vastuAstrologerId, amount);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create order', error: err });
  }
};

export const verifyPayment = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const isValid = await paymentService.verifyPayment(req.body);
    if (isValid) {
      // const mailPayload = {
      //   to: req.body.email,
      //   subject: 'Payment Successful',
      //   html: `<p>Your payment for ₹${req.body.amount} was successful. Thank you!</p>`,
      // };
      // await sendMailJob(mailPayload);

      res.status(200).json({ message: 'Payment verified successfully', status: 'success', statusCode: 200 });
    } else {
      res.status(400).json({ message: 'Payment verification failed', status: 'fail', statusCode: 400 });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error verifying payment', error: err, status: 'fail', statusCode: 500 });
  }
};

export const getUserPayments = async (req: Request, res: Response) => {
  try {
    const userId = req.params.userId;
    const payments = await paymentService.getUserPayments(userId);
    console.log("sunder", payments)
    if (payments.length != 0) {
      res.status(200).json({ message: 'Payment found successfully', status: 'success', statusCode: 200, data: payments });

    } else {
      res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });

    }

  } catch (err) {
    res.status(500).json({ message: 'Error fetching payments', error: err });
  }
};


export const handleWebhook = async (req: Request, res: Response) => {
  try {
    const signature = req.headers['x-razorpay-signature'] as string;
    await paymentService.handleWebhookEvent(req.body, signature);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

export const deleteUserPayments = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payments = await paymentService.deleteUserPayments(id);
    if (payments) {
      res.status(200).json({ message: 'Payment deleted successfully', status: 'success', statusCode: 200, data: payments });

    } else {
      res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });

    }

  } catch (err) {
    res.status(500).json({ message: 'Error deleting payments', error: err });
  }
};

export const getAllUserPayments = async (req: Request, res: Response) => {
  try {
    const payments = await paymentService.getAllUserPayments();
    if (payments.length != 0) {
      res.status(200).json({ message: 'Payment found successfully', status: 'success', statusCode: 200, data: payments });

    } else {
      res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });

    }

  } catch (err) {
    res.status(500).json({ message: 'Error fetching payments', error: err });
  }
};


export const updateAllUserPayments = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payments = await paymentService.updateAllUserPayments(id, req.body);
    if (payments) {
      res.status(200).json({ message: 'Payment updated successfully', status: 'success', statusCode: 200, data: payments });

    } else {
      res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });

    }

  } catch (err) {
    res.status(500).json({ message: 'Error updating payments', error: err });
  }
};