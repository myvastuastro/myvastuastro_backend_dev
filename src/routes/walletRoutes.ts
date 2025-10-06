import { Router } from "express";
import {createOrder,verifyPayment,payAstrologerVastuAstrologerProfessional,withdrawEarnings,getAllByCompanyId,deductMoney,getAllByAstrologerId ,getTransactions,getUserPayments,deleteUserPayments, getAllUserPayments, updateAllUserPayments} from "../controllers/walletController";
const router = Router();
//wallet routes
router.post("/deduct", deductMoney);
router.get("/transactions/:userId", getTransactions);
//payment routes
router.post('/create-order', createOrder);
router.post('/verify', verifyPayment);
router.get('/payment/:userId', getUserPayments);
router.delete('/payment/delete/:id', deleteUserPayments);
router.get('/payment/transactions/getAll', getAllUserPayments);
router.put('/payment/update/:id', updateAllUserPayments);

// New astrologer endpoints
// router.post("/astrologer/credit", creditAstrologer);
// router.post("/astrologer/deduct", deductAstrologer);
router.post("/astrologer/pay", payAstrologerVastuAstrologerProfessional);
router.get("/astrologer/:astrologerId/transactions", getAllByAstrologerId);

//withdrawal
router.post("/withdraw", withdrawEarnings);

//company
router.get("/company/:companyId/transactions", getAllByCompanyId);


export default router;
