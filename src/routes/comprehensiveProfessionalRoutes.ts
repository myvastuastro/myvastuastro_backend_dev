import express from 'express';
import {uploadComprehensiveProfessionalController, getComprehensiveProfessionalsById,getComprehensiveProfessionalsController,getComprehensiveProfessionalsByUserId, updateComprehensiveProfessionalsController} from '../controllers/comprehensiveProfessionalController';
import { upload } from '../middleware/uploadMiddleware';
const router = express.Router();
router.post('/upload', upload.single("file"), uploadComprehensiveProfessionalController);
router.get('/all', getComprehensiveProfessionalsController);
router.put('/update/:id', upload.single("file"), updateComprehensiveProfessionalsController);
router.get('/getByUserId/:userId', getComprehensiveProfessionalsByUserId);
router.get('/getById/:id', getComprehensiveProfessionalsById);

export default router;