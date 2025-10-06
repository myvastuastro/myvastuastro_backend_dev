import User from "../models/user";
import mongoose from 'mongoose';

export class UserRepository {

  static async createUser(data: any): Promise<any> {
    try {
      const user = await User.create(data);
      return { exists: false, message: "New user created successfully.", status: "success", data: user };
    } catch (error) {
      console.error('Error creating user:', error);
      throw error;
    }
  }


  static async checkEmailOrMobileExists(email: any, mobile: any) {
    const existingUser = await User.findOne({
      $or: [
        { email: email },
        { mobile: mobile }
      ]
    });
    const exists = !!existingUser;
    const message = "Email or mobile already exists.";
    const status = "error";
    return { exists, message, status, data: {} };
  }


  static async updateUserOTP(emailOrMobile: any, otp: any, country_code: any) {
    const isMobile = /^\d{10}$/.test(emailOrMobile);
    const filter = isMobile
      ? { mobile: Number(emailOrMobile) }
      : { email: emailOrMobile.toLowerCase().trim() };

    return await User.updateOne(filter, { otp, country_code });
  }

  static async findUserByEmailOrMobile(emailOrMobile: any) {
    const value = emailOrMobile.trim().toLowerCase();
    const isMobile = /^\d{10}$/.test(value); // very basic check
    const query = isMobile
      ? { mobile: parseInt(value, 10) }
      : { email: value };
    let data = await User.findOne({ mobile: query.mobile });
    return data;
  }

  public static async findByEmailAndPassword(email: string, password: string): Promise<any | null> {
    return await User.findOne({ email, password });
  }

  public static async findByMobileAndOtp(mobile: string, otp: string): Promise<any | null> {
    return await User.findOne({ mobile: Number(mobile), otp });
  }

  public static async findAllUser(): Promise<any | null> {
    return await User.find({});
  }

   public static async findOneUser(id: any): Promise<any | null> {
    return await User.findOne( { _id: id});
  }

  

  public static async updateUserAccountStatus(id: string, status: string): Promise<any | null> {
    return await User.updateOne(
      { _id: new mongoose.Types.ObjectId(id) },
      { $set: { status } }
    );
  }


  public static async updateUser(id: any, data: any): Promise<any> {
    return await User.findByIdAndUpdate(id, { $set: data }, { new: true });
  }

    static async deleteUser(id: string): Promise<any> {
        return await User.deleteOne({ _id: id });
    }
}