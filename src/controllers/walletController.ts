// controllers/walletController.ts
import { Request, Response } from "express";
import { WalletService } from "../services/walletService";

export async function deductMoney(req: Request, res: Response): Promise<void> {
  try {
    const { userId, amount, description, serviceType, astrologerId, vastuAstrologerId, companyId} = req.body;
    const wallet = await WalletService.deductMoney(userId, amount, description, serviceType, astrologerId, vastuAstrologerId, companyId);
    if (wallet) {
      res.status(200).json({ message: 'Amount deducted', data: wallet, status: "success", statusCode: 200 });
    } else {
      res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: wallet });
    }
  } catch (err: any) {
    res.status(500).json({ message: 'Failed', status: "fail", statusCode: 500, data: err });

  }
}

export async function getTransactions(req: Request, res: Response): Promise<void> {
  try {
    const { userId } = req.params;
    const transactions = await WalletService.getTransactions(userId);
    if (transactions) {
      res.status(200).json({ message: 'Transaction history', data: transactions, status: "success", statusCode: 200 });
    } else {
      res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: transactions });
    }
  } catch (err: any) {
    res.status(500).json({ message: 'Failed', status: "fail", statusCode: 500, data: err });

  }
}

//payment controller
export const createOrder = async (req: Request, res: Response) => {
  try {
    const { userId, amount, astrologerId, vastuAstrologerId, companyId} = req.body;
    const result = await WalletService.createOrder(userId, astrologerId, vastuAstrologerId, amount, companyId);
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ message: 'Failed to create order', error: err });
  }
};



export const verifyPayment = async (req: Request, res: Response) => {
  try {
    console.log(req.body)
    const isValid = await WalletService.verifyPayment(req.body);
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
    const payments = await WalletService.getUserPayments(userId);
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
    await WalletService.handleWebhookEvent(req.body, signature);
    res.status(200).json({ success: true });
  } catch (err) {
    res.status(400).json({ success: false, error: err });
  }
};

export const deleteUserPayments = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const payments = await WalletService.deleteUserPayments(id);
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
    const payments = await WalletService.getAllUserPayments();
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
    const payments = await WalletService.updateAllUserPayments(id, req.body);
    if (payments) {
      res.status(200).json({ message: 'Payment updated successfully', status: 'success', statusCode: 200, data: payments });
    } else {
      res.status(400).json({ message: 'No payment found', status: 'fail', statusCode: 400, data: payments });
    }
  } catch (err) {
    res.status(500).json({ message: 'Error updating payments', error: err });
  }
};

// export async function creditAstrologer(req: Request, res: Response): Promise<void> {
//   try {
//     const { astrologerId, amount, description, serviceType, userId, vastuAstrologerId } = req.body;
//     const wallet = await WalletService.creditAstrologer(astrologerId, amount, description, serviceType, userId, vastuAstrologerId);
//     res.status(200).json({ message: 'Amount credited to astrologer', data: wallet, status: "success", statusCode: 200 });
//   } catch (err: any) {
//     res.status(500).json({ message: 'Failed to credit astrologer', status: "fail", statusCode: 500, error: err.message });
//   }
// }

// export async function deductAstrologer(req: Request, res: Response): Promise<void> {
//   try {
//     const { astrologerId, amount, description, serviceType, userId } = req.body;
//     const wallet = await WalletService.deductAstrologer(astrologerId, amount, description, serviceType, userId);
//     res.status(200).json({ message: 'Amount deducted from astrologer', data: wallet, status: "success", statusCode: 200 });
//   } catch (err: any) {
//     res.status(500).json({ message: 'Failed to deduct astrologer', status: "fail", statusCode: 500, error: err.message });
//   }
// }

// Pay astrologer (user -> astrologer)
export async function payAstrologerVastuAstrologerProfessional(req: Request, res: Response) {
  try {
    const { userId, astrologerId, amount, description, serviceType, vastuAstrologerId, companyId } = req.body;
    const result = await WalletService.payAstrologerVastuAstrologerProfessional(userId, astrologerId, amount, description, serviceType , vastuAstrologerId, companyId );
    res.status(200).json({ message: "Payment successful", data: result, status: "success", statusCode: 200 });
  } catch (err: any) {
    res.status(500).json({ message: err.message || "Payment failed", status: "fail", statusCode: 500 });
  }
}

export async function getAllByAstrologerId(req: Request, res: Response): Promise<void> {
  try {
    const { astrologerId } = req.params;
    const transactions = await WalletService.getAllByAstrologerId(astrologerId);

    res.status(200).json({
      message: "Transactions fetched successfully",
      status: "success",
      statusCode: 200,
      data: transactions,
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Error fetching astrologer transactions",
      status: "fail",
      statusCode: 500,
      error: err.message,
    });
  }
}




export async function getAllByCompanyId(req: Request, res: Response): Promise<void> {
  try {
    const { companyId } = req.params;
    const transactions = await WalletService.getAllByCompanyId(companyId);

    res.status(200).json({
      message: "Transactions fetched successfully",
      status: "success",
      statusCode: 200,
      data: transactions,
    });
  } catch (err: any) {
    res.status(500).json({
      message: "Error fetching astrologer transactions",
      status: "fail",
      statusCode: 500,
      error: err.message,
    });
  }
}


export const withdrawEarnings = async (req: Request, res: Response) => {
  try {
    const { astrologerId, amount, bankName, accountNumber, ifscCode,fullName, email, mobile } = req.body;

    if (!fullName || !mobile || !email || !astrologerId || !amount || !bankName || !accountNumber || !ifscCode) {
      return res.status(400).json({
        status: "fail",
        message: "All fields are required",
      });
    }

    const result = await WalletService.withdrawEarnings(
      fullName,
      email,
      mobile,
      astrologerId,
      amount,
      bankName,
      accountNumber,
      ifscCode,
    );

    return res.status(200).json({
      status: "success",
      message: "Withdrawal request submitted successfully",
      data: result,
    });
  } catch (error) {
    console.error("Withdraw Error:", error);
    res.status(500).json({
      status: "fail",
      message: error || "Something went wrong",
    });
  }
};



