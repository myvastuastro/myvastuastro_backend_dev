import { Request, Response } from 'express';
import { UserService } from '../services/userService';
import jwt from 'jsonwebtoken';
import { IUserData } from '../types/User';

export async function registerUser(req: Request, res: Response): Promise<void> {
  try {
    const newUser = await UserService.registerUser(req.body);
  
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json(error);
  }
}

export async function sendOTPController(req: Request, res: Response): Promise<void> {
  const { emailOrMobile,country_code } = req.body;

  try {
    const otp = await UserService.sendOTP(emailOrMobile, country_code);
    res.status(200).json({ message: 'OTP sent successfully.', otp });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP.' });
  }
}


export async function getAll(req: Request, res: Response) {
  try {
    const data = await UserService.getAll();
    res.status(200).json({ message: 'find successfully.', data });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP.' });
  }
}

export async function getById(req: Request, res: Response) {
  try {
     const { id } = req.params;
    const data = await UserService.getById(id);
    res.status(200).json({ message: 'find successfully.', data, status: "success", statusCode: 200 });
  } catch (error) {
    console.error('Error sending OTP:', error);
    res.status(500).json({ error: 'Failed to send OTP.' });
  }
}




export async function loginByEmailAndPassword(req: Request, res: Response): Promise<void> {
  try {
    const { email, password } = req.body;
    const user = await UserService.loginByEmailAndPassword(email, password);
    if (user) {
      res.json({ message: 'Login successful', user });
    } else {
      res.status(401).json({ message: 'Invalid email or password' });
    }
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function loginByMobileAndOTP(req: Request, res: Response): Promise<void> {
  try {
    const { mobile, country_code } = req.body;
    const user = await UserService.sendOTP(mobile,country_code);
    res.status(200).json({ user });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}

export async function verifyOTP(req: Request, res: Response): Promise<void> {
  try {
    const { mobile, otp } = req.body;
    const isVerified = await UserService.verifyOTP(mobile, otp);

    if (!isVerified.status) {
      res.status(isVerified.statusCode).json({ isVerified });
      return;
    }

    const user = isVerified.data as IUserData;

    const payload = {
      userId: user._id,
      mobile: user.mobile,
      role: user.role,
    };

    const token = jwt.sign(payload, "myvastuastro_secrete_key", { expiresIn: '31d' });

    res.status(200).json({ isVerified, token });
  } catch (error) {
    res.status(500).json({ message: error });
  }
}




export async function disableAccout(req: Request, res: Response): Promise<void> {
  try {
    const { id, status } = req.params;
    const isUpdated = await UserService.disableAccout(id, status);
    console.log(isUpdated)
    if (isUpdated) {
        if(status === "0"){
          res.status(200).json({  status: true,
            message: "User account deleted successfully.",
            statusCode: 200});
        }else{
          res.status(200).json({  status: true,
            message: "User account activated successfully.",
            statusCode: 200});
        }
      
    } else {
      res.status(404).json({
        status: false,
        message: "User account not found or update failed.",
        statusCode: 404,
      });
    }
  } catch (error) {
    res.status(500).json({ message: 'Internal server error.', status: false, statusCode: 500 });
  }
}



export async function  updateUserById(req: Request, res: Response) {
  

   try {
      const { id } = req.params;
      const user = await UserService.updateUser(id, req.body);
      if (user) {
          res.status(200).json({ message: 'Update successful', data: user, status: "success", statusCode: 200 });
      } else {
          res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: user });
      }

  } catch (error) {
      res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
  }
 };


 export async function deleteUser(req: Request, res: Response): Promise<void> {
     try {
         const { id } = req.params;
         const user = await UserService.deleteUser(id);
         if (user) {
             res.status(200).json({ message: 'Delete successful', data: user, status: "success", statusCode: 200 });
         } else {
             res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: user });
         }
     } catch (error) {
         res.status(400).json({ message: 'User not found', status: "fail", statusCode: 400, data: error });
     }
 }


 export async function createUser(req: Request, res: Response): Promise<void> {
     try {
         const user = await UserService.createUser(req.body);

         if (user) {
             res.status(200).json({ message: 'Submit successful', data: user, status: "success", statusCode: 200 });
         } else {
             res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: user });
         }
 
     } catch (error) {
         res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
     }
 }



