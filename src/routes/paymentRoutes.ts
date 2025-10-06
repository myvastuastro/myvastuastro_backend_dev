import express from 'express';
import {
    createOrder,
    verifyPayment,
    getUserPayments,
    deleteUserPayments,
    getAllUserPayments,
    updateAllUserPayments
  } from '../controllers/PaymentController';

const router = express.Router();

router.post('/create-order', createOrder);
router.post('/verify', verifyPayment);
router.get('/user/:userId', getUserPayments);
router.delete('/user/delete/:id', deleteUserPayments);
router.get('/user/all', getAllUserPayments);
router.put('/user/update/:id', updateAllUserPayments);
export default router;