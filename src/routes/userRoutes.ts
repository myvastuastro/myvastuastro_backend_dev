import express from 'express';
import { registerUser, sendOTPController,createUser, loginByEmailAndPassword,verifyOTP, getById,loginByMobileAndOTP,getAll,disableAccout, updateUserById,deleteUser } from '../controllers/userController';
const router = express.Router();
router.post('/login/email', loginByEmailAndPassword);
router.post('/login/mobile', loginByMobileAndOTP);
router.post('/register', registerUser);
router.get('/all', getAll);
router.get('/getById/:id', getById);
router.post('/send-otp', sendOTPController);
router.post('/verify-otp', verifyOTP);
router.get('/deleteAccount/:id/:status', disableAccout)
router.delete('/deleteUser/:id/', deleteUser)
router.put('/update/:id', updateUserById);
router.post('/create', createUser);

export default router;