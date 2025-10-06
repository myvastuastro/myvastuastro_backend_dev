// repositories/walletRepository.ts
import Wallet from "../models/wallet";

export default class WalletRepository {

  // wallet operations
  static async getWallet(userId: string) {
    return await Wallet.findOne({ userId });
  }

  static async getWalletForAstrologer(astrologerId: string) {
    return await Wallet.findOne({ astrologerId });
  }

  static async createWallet(userId: string) {
    return Wallet.create({ userId, balance: 0, transactions: [] });
  }

  static async createWalletForAstrologer(astrologerId: string, amount: number) {
    return Wallet.create({ astrologerId, balance: amount, transactions: [] });
  }



  static async updateBalance(userId: string, newBalance: number) {
    return await Wallet.findOneAndUpdate(
      { userId },
      { balance: newBalance },
      { new: true }
    );
  }

  static async updateBalanceForAstrologer(astrologerId: string, newBalance: number) {
    return await Wallet.findOneAndUpdate(
      { astrologerId },
      { balance: newBalance },
      { new: true }
    );
  }

  static async addTransaction(data: any) {
    return await Wallet.findOneAndUpdate(
      { userId: data.userId },
      { $push: { transactions: data } },
      { new: true }
    );
  }
  //astrologer
  static async addTransactionForAstrologer(data: any) {
    const transactionData: any = {
      type: data.type,
      amount: data.amount,
      description: data.description,
      serviceType: data.serviceType,
      userId: data.userId || null,
      status: data.status,
      date: data.date || new Date(),
      astrologerId: data.astrologerId,
      vastuAstrologerId: data.vastuAstrologerId || null,
      companyId: data.companyId || null
    };


    return await Wallet.findOneAndUpdate(
      { astrologerId: data.astrologerId },
      { $push: { transactions: transactionData } },
      { new: true }
    );

  }

  static async getAllByAstrologerId(astrologerId: string) {
    return await Wallet.findOne({ astrologerId })
  }

  static async getTransactions(userId: string) {
    return await Wallet.find({ userId }).sort({ createdAt: -1 });
  }

  //payment operations
  static async createPayment(data: any) {
    return await Wallet.findOneAndUpdate(
      { userId: data.userId },
      {
        $push: {
          transactions: {
            type: "credit",
            amount: data.amount,
            transactionId: data.transactionId,
            paymentMethod: data.paymentMethod,
            razorpayOrderId: data.razorpayOrderId,
            status: "pending",
            vastuAstrologerId: data.vastuAstrologerId,
            astrologerId: data.astrologerId
          },
        },
        $setOnInsert: {
          userId: data.userId,
          balance: 0, // balance updated only after verification
        },
      },
      { new: true, upsert: true }
    );
  }


  static async completeTransaction(userId: string, orderId: string, data: any) {
    return await Wallet.findOneAndUpdate(
      { userId, "transactions.razorpayOrderId": orderId },
      {
        $set: {
          "transactions.$.status": data.status,
          "transactions.$.razorpayPaymentId": data.razorpayPaymentId,
          "transactions.$.razorpaySignature": data.razorpaySignature,
          "transactions.$.vastuAstrologerId": data.vastuAstrologerId || null,
          "transactions.$.transactionId": data.transactionId, // keep original or Razorpay payment ID
          "transactions.$.type": data.type || "credit",
          "transactions.$.amount": data.amount,
          "transactions.$.paymentMethod": data.paymentMethod || "razorpay",
          "transactions.$.date": data.date || new Date(),
          "transactions.$.astrologerId": data.astrologerId || null,

        },
        $inc: { balance: data.status === "success" ? data.amount : 0 },
      },
      { new: true }
    );
  }

  static async findByOrderId(orderId: string) {
    return await Wallet.findOne({ razorpayOrderId: orderId });
  }

  static async updatePaymentStatus(orderId: string, update: any) {
    return await Wallet.findOneAndUpdate(
      { razorpayOrderId: orderId },
      { $set: update },
      { new: true }
    );
  }



  static async findAllByUser(userId: string) {
    return await Wallet.find({ userId }).populate('vastuAstrologerId');
  }

  static async getAllPayments(): Promise<any[]> {
    return await Wallet.find({});
  }
  static async deletePayment(id: string) {
    return await Wallet.findByIdAndDelete(id);
  }

  static async updatePaymentById(id: string, data: any) {
    return await Wallet.findByIdAndUpdate(id, data, { new: true });
  }


  // Company Wallet
  static async getCompanyWallet(companyId: string) {
    return await Wallet.findOne({ companyId });
  }
  static async createCompanyWallet(companyId: string, balance: number = 0) {
    return await Wallet.create({ companyId, company: true, balance, transactions: [] });
  }
  static async updateCompanyBalance(companyId: string, balance: number) {
    return await Wallet.findOneAndUpdate(
      { companyId },
      { $set: { balance } },
      { new: true }
    );
  }
  static async addTransactionForCompany(data: any) {
    const transactionData: any = {
      type: data.type,
      amount: data.amount,
      description: data.description,
      serviceType: data.serviceType,
      userId: data.userId || null,
      status: data.status,
      date: data.date || new Date(),
      astrologerId: data.astrologerId,
      vastuAstrologerId: data.vastuAstrologerId || null,
      companyId: data.companyId || null
    };






    return await Wallet.findOneAndUpdate(
      { companyId: data.companyId }, // 👈 target company wallet
      { $push: { transactions: transactionData } },
      { new: true }
    );
  }

  // Delete Company Wallet
  static async deleteCompanyWallet(companyId: string) {
    return await Wallet.findOneAndDelete({ companyId });
  }

  // Get All Companies Wallets
  static async getAllCompanyWallets() {
    return await Wallet.find({ company: true });
  }

  static async getAllByCompanyId(companyId: string) {
    return await Wallet.findOne({ companyId })
  }


  //vastuastrologer
  static async getWalletForVastuAstrologer(vastuAstrologerId: string) {
    return await Wallet.findOne({ vastuAstrologerId });
  }

  static async createWalletForVastuAstrologer(vastuAstrologerId: string, amount: number) {
    return Wallet.create({ vastuAstrologerId, balance: amount, transactions: [] });
  }

  static async updateBalanceForVastuAstrologer(vastuAstrologerId: string, newBalance: number) {
    return await Wallet.findOneAndUpdate(
      { vastuAstrologerId },
      { balance: newBalance },
      { new: true }
    );
  }

  static async addTransactionForVastuAstrologer(data: any) {
    const transactionData: any = {
      type: data.type,
      amount: data.amount,
      description: data.description,
      serviceType: data.serviceType,
      userId: data.userId || null,
      status: data.status,
      date: data.date || new Date(),
      astrologerId: data.astrologerId,
      vastuAstrologerId: data.vastuAstrologerId || null,
      companyId: data.companyId || null
    };

    return await Wallet.findOneAndUpdate(
      { vastuAstrologerId: data.vastuAstrologerId },
      { $push: { transactions: transactionData } },
      { new: true }
    );

  }



  

  
}
