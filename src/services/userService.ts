import { UserRepository } from "../repo/userRepository";
import otpGenerator from 'otp-generator';
import { sendOTP } from "../utils/otpSender";
import User from "../models/user";
import { IUserData } from "../types/User";

export class UserService {

  static async registerUser(emailOrMobile: any): Promise<any> {
   
    const mobileExists = await UserRepository.checkEmailOrMobileExists(null, emailOrMobile);
    if (mobileExists.exists) {
      return mobileExists;
    }
    return UserRepository.createUser(emailOrMobile);
  }


  static async sendOTP(mobile: any, country_code: any): Promise<any> {
    try {
      const user = await UserRepository.findUserByEmailOrMobile(mobile);
        if (user?.status === 0) {
        return {
          status: false,
          message: "Data is not present in our database. Please contact with MyVastuAstro Team",
          statusCode: 200
        };
      }
  
      // Create user if not exists
      if (!user) {
        await User.create({
          mobile,
          name: "Guest",
          email: ""
        });
      }
  
      // Validate mobile
      if (!mobile) {
        return {
          status: false,
          message: "Mobile number is required",
          statusCode: 400
        };
      }
  
      // Set fixed OTP for specific number
      const otp = mobile === "7817976567"
        ? "123456"
        : otpGenerator.generate(6, {
            lowerCaseAlphabets: false,
            upperCaseAlphabets: false,
            specialChars: false
          });
  
      // Update OTP
      await UserRepository.updateUserOTP(mobile, otp, country_code);
  
      // Send OTP
      const response = await sendOTP(mobile, otp, country_code);
      console.log(response.data);
  
      return {
        status: true,
        message: "OTP sent successfully",
        statusCode: 200,
        otp
      };
  
    } catch (error: any) {
      console.error("Error sending OTP:", error.message);
      return {
        status: false,
        message: "Something went wrong while sending OTP",
        statusCode: 500
      };
    }
  }
  



  public static async verifyOTP(mobile: string, otp: string): Promise<{
    status: boolean;
    message: string;
    statusCode: number;
    data: Object
  }> {
    try {
      const user: IUserData = await UserRepository.findByMobileAndOtp(mobile, otp);
      if (user.otp == otp) {
        return {
          status: true,
          message: "OTP verified successfully",
          statusCode: 200,
          data: user
        };
      } else {
        return {
          status: false,
          message: "Invalid OTP or mobile number",
          statusCode: 401,
          data: user
        };
      }
    } catch (error: any) {
      return {
        status: false,
        message: "Something went wrong while verifying OTP",
        statusCode: 500,
        data: {}
      };
    }
  }




  public static async loginByEmailAndPassword(email: string, password: string): Promise<any | null> {
    return UserRepository.findByEmailAndPassword(email, password);
  }

  public static async loginByMobileAndOTP(mobile: string, otp: string): Promise<any | null> {
    return UserRepository.findByMobileAndOtp(mobile, otp);
  }


  public static async getAll(): Promise<any | null> {
    return await UserRepository.findAllUser()
  }


    public static async getById(id: any): Promise<any | null> {
    return await UserRepository.findOneUser(id)
  }
  


  public static async disableAccout(id: any, status: any): Promise<any | null> {
    const result = await UserRepository.updateUserAccountStatus(id, status);
    return result.modifiedCount > 0;
  }


  


    public static async updateUser(id: any,data: any): Promise<any | null> {
    return await UserRepository.updateUser(id, data)
  }

   static async deleteUser(id: string): Promise<any> {
          try {
              return await UserRepository.deleteUser(id);
          } catch (error) {
              throw new Error('Could not delete contact');
          }
   }



    static async createUser(data: any): Promise<any> {
           try {
               const create = await UserRepository.createUser(data);
               return create;
           } catch (error) {
               throw new Error('Could not create quote');
           }
    }

}

