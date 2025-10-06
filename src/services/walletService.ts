// services/walletService.ts
import WalletRepository from "../repo/walletRepository";
import Razorpay from "razorpay";
import crypto from 'crypto';
import axios from "axios";

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!
});

export class WalletService {

  static async getWallet(userId: string) {
    let wallet = await WalletRepository.getWallet(userId);
    if (!wallet) {
      wallet = await WalletRepository.createWallet(userId);
    }
    return wallet;
  }


  // 3. Deduct Money
  static async deductMoney(userId: string, amount: number, description: string, serviceType: string, astrologerId: string, vastuAstrologerId: string, companyId: string) {
    let wallet = await WalletRepository.getWallet(userId);
    if (!wallet) throw new Error("Wallet not found");
    if (wallet.balance < amount) throw new Error("Insufficient balance");
    const newBalance = wallet.balance - amount;
    await WalletRepository.addTransaction({
      userId,
      type: "debit",
      amount,
      description,
      astrologerId,
      vastuAstrologerId,
      companyId,
      status: "success",
      serviceType,
      date: new Date(),
    });
    wallet = await WalletRepository.updateBalance(userId, newBalance);
    return wallet;
  }

  static async getTransactions(userId: string) {
    return await WalletRepository.getTransactions(userId);
  }




  static async createOrder(userId: string, astrologerId: string, vastuAstrologerId: string, amount: number, companyId: string) {
    const order = await razorpay.orders.create({
      amount: amount * 100,
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      payment_capture: true
    });

    const payment = await WalletRepository.createPayment({
      userId,
      astrologerId,
      vastuAstrologerId,
      companyId,
      amount,
      transactionId: order.id,
      paymentMethod: 'razorpay',
      razorpayOrderId: order.id,
    });

    return { order, payment };
  }

  static async verifyPayment(details: {
    razorpay_order_id: string;
    razorpay_payment_id: string;
    razorpay_signature: string;
    userId: string;
    amount: number;
    vastuAstrologerId?: string;
    astrologerId?: string;
    companyId: string
  }) {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId, amount, vastuAstrologerId, astrologerId, companyId } = details;

    const generated_signature = crypto
      .createHmac('sha256', process.env.RAZORPAY_KEY_SECRET!)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest('hex');

    const isValid = generated_signature === razorpay_signature;
    if (isValid) {
      // ✅ Push transaction & update balance
      await WalletRepository.completeTransaction(userId, razorpay_order_id, {
        type: "credit",
        amount,
        transactionId: razorpay_payment_id,
        paymentMethod: "razorpay",
        razorpayOrderId: razorpay_order_id,
        razorpayPaymentId: razorpay_payment_id,
        razorpaySignature: razorpay_signature,
        status: "success",
        vastuAstrologerId: vastuAstrologerId,
        astrologerId: astrologerId,
        companyId: companyId,
        date: new Date(),
      });
    } else {
      await WalletRepository.updatePaymentStatus(razorpay_order_id, {
        status: "failed",
      });
    }
    return isValid;
  }

  static async getUserPayments(userId: string) {
    return await WalletRepository.findAllByUser(userId);
  }


  static async handleWebhookEvent(eventBody: Buffer, receivedSignature: string) {
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

      await WalletRepository.updatePaymentStatus(payment.order_id, {
        paymentStatus: 'authorized',
        razorpayPaymentId: payment.id,
      });

    }

    if (event.event === 'payment.captured') {
      const payment = event.payload.payment.entity;
      await WalletRepository.updatePaymentStatus(payment.order_id, {
        paymentStatus: 'captured',
        razorpayPaymentId: payment.id,
      });

      console.log('✅ Webhook handled: Payment captured');
    }

    if (event.event === 'payment.failed') {
      const payment = event.payload.payment.entity;
      await WalletRepository.updatePaymentStatus(payment.order_id, {
        paymentStatus: 'failed',
        razorpayPaymentId: payment.id,
      });

      console.log('❌ Webhook handled: Payment failed');
    }

    return true;
  }

  static async deleteUserPayments(id: string) {
    return await WalletRepository.deletePayment(id);
  }

  static async getAllUserPayments() {
    return await WalletRepository.getAllPayments();
  }

  static async updateAllUserPayments(id: string, data: any) {
    return await WalletRepository.updatePaymentById(id, data);
  }


  // // Credit money to astrologer
  static async creditAstrologerVastuAstrologerProfessional(
    astrologerId: string | null,
    vastuAstrologerId: string | null,
    companyId: string,
    amount: number,
    description: string,
    serviceType: string,
    userId: string
  ) {
    // Example share percentages
    const astroShare = astrologerId ? amount * 0.4 : 0;
    const vastuShare = vastuAstrologerId ? amount * 0.4 : 0;
    const companyShare = amount - (astroShare + vastuShare);

    let astroWallet = null;
    let vastuWallet = null;
    let professionalWallet = null;

    // -------------------------
    // Credit Astrologer
    // -------------------------
    if (astrologerId) {
      astroWallet = await WalletRepository.getWalletForAstrologer(astrologerId);
      if (!astroWallet) {
        astroWallet = await WalletRepository.createWalletForAstrologer(astrologerId, astroShare);
      } else {
        astroWallet.balance += astroShare;
        await WalletRepository.updateBalanceForAstrologer(astrologerId, astroWallet.balance);
      }
      await WalletRepository.addTransactionForAstrologer({
        type: "credit",
        amount: astroShare,
        description: description || "Credited to astrologer wallet",
        serviceType,
        userId,
        status: "completed",
        date: new Date(),
        astrologerId,
        vastuAstrologerId,
        companyId
      });
    }

    // -------------------------
    // Credit Vastu Astrologer
    // -------------------------
    if (vastuAstrologerId) {
      vastuWallet = await WalletRepository.getWalletForVastuAstrologer(vastuAstrologerId);
      if (!vastuWallet) {
        vastuWallet = await WalletRepository.createWalletForVastuAstrologer(vastuAstrologerId, vastuShare);
      } else {
        vastuWallet.balance += vastuShare;
        await WalletRepository.updateBalanceForVastuAstrologer(vastuAstrologerId, vastuWallet.balance);
      }
      await WalletRepository.addTransactionForVastuAstrologer({
        type: "credit",
        amount: vastuShare,
        description: "Credited to Vastu Astrologer wallet",
        serviceType,
        userId,
        status: "completed",
        date: new Date(),
        astrologerId,
        vastuAstrologerId,
        companyId
      });
    }

    

    // -------------------------
    // Credit Company (always)
    // -------------------------
    let companyWallet = await WalletRepository.getCompanyWallet(companyId);
    if (!companyWallet) {
      companyWallet = await WalletRepository.createCompanyWallet(companyId, companyShare);
    } else {
      companyWallet.balance += companyShare;
      await WalletRepository.updateCompanyBalance(companyId, companyWallet.balance);
    }
    await WalletRepository.addTransactionForCompany({
      type: "credit",
      amount: companyShare,
      description: "Company share from user payment",
      serviceType,
      userId,
      status: "completed",
      date: new Date(),
      astrologerId,
      vastuAstrologerId,
      companyId
    });

    return { astroWallet, vastuWallet, professionalWallet, companyWallet };
  }

 



  static async getAllByAstrologerId(astrologerId: string) {
    const wallet = await WalletRepository.getAllByAstrologerId(astrologerId);
    if (!wallet) {
      throw new Error("No wallet found for this astrologer");
    }
    return wallet; // only return transactions
  }

  static async getAllByCompanyId(companyId: string) {
    const wallet = await WalletRepository.getAllByCompanyId(companyId);
    if (!wallet) {
      throw new Error("No wallet found for this astrologer");
    }
    return wallet; // only return transactions
  }



  // -------------------------
  // Pay astrologer: deduct user + credit astrologer
  // -------------------------
  static async payAstrologerVastuAstrologerProfessional(
    userId: string,
    astrologerId: string,
    amount: number,
    description: string,
    serviceType: string,
    vastuAstrologerId: string,
    companyId: string
  ) {
    // 1. Deduct from user
    const userWallet = await this.deductMoney(userId, amount, description, serviceType, astrologerId, vastuAstrologerId, companyId);

    // 2. Credit astrologer
    const Wallets = await this.creditAstrologerVastuAstrologerProfessional(astrologerId, vastuAstrologerId, companyId, amount, description, serviceType, userId);

    return { userWallet, Wallets };
  }


  // -------------------------
  // Pay astrologer: deduct user + credit astrologer
  // -------------------------




  static async withdrawEarnings(fullName: string, mobile: string, email: string, astrologerId: string, amount: number, bankName: string, accountNumber: string, ifscCode: string) {
    // 1️⃣ Get wallet
    const wallet = await WalletRepository.getAllByAstrologerId(astrologerId);
    if (!wallet) throw new Error("Wallet not found");
    if (wallet.balance < amount) throw new Error("Insufficient wallet balance");

    // 2️⃣ Deduct balance immediately
    wallet.balance -= Number(amount);

    // 3️⃣ Create withdrawal transaction
    const transaction = {
      type: "debit",
      amount,
      description: `Withdrawal to bank (${bankName})`,
      transactionId: `WD-${Date.now()}`,
      paymentMethod: "razorpayx",
      astrologerId,
      status: "pending",
      date: new Date(),
    };

    wallet.transactions.push(transaction);
    await wallet.save();

    // 4️⃣ Trigger RazorpayX Payout API
    try {
      const payoutPayload = {
        account_number: process.env.RAZORPAYX_ACCOUNT_NUMBER,
        amount: 1000,
        currency: "INR",
        mode: "NEFT",
        purpose: "payout",
        fund_account: {
          account_type: "bank_account",
          bank_account: {
            name: fullName,
            ifsc: ifscCode,
            account_number: accountNumber
          },
          contact: {
            name: fullName,
            email: email,
            contact: mobile,
            type: "astrologer",
            reference_id: transaction.transactionId,
            notes: {
              notes_key_1: astrologerId,
              notes_key_2: "withdrawal"
            }
          }
        },
        queue_if_low_balance: true,
        reference_id: transaction.transactionId,
        narration: "Astrologer Withdrawal",
        notes: {
          notes_key_1: astrologerId,
          notes_key_2: "withdrawal"
        }
      };

      const payoutResponse = await axios.post(
        "https://api.razorpay.com/v1/payouts",
        payoutPayload,
        {
          auth: {
            username: process.env.RAZORPAY_KEY_ID!,
            password: process.env.RAZORPAY_KEY_SECRET!,
          },
        }
      );

      // 5️⃣ Update transaction status to completed
      transaction.status = "completed";
      await WalletRepository.addTransactionForAstrologer(transaction);
      await WalletRepository.updateBalanceForAstrologer(astrologerId, wallet.balance);
      return {
        status: "success",
        message: "Withdrawal successful",
        payoutId: payoutResponse.data.id,
        transaction,
      };
    } catch (error: any) {
      console.error("❌ RazorpayX Payout Error:", error.response?.data || error.message);

      // 6️⃣ Revert balance on failure
      wallet.balance += Number(amount);
      transaction.status = "failed";
      await wallet.save();

      throw new Error("Payout failed. Please try again later.");
    }
  }
}
