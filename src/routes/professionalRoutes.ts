import express from 'express';
import {uploadProfessionalController, getProfessionalsController,getProfessionalsById,deleteProfessionalsById,getProfessionalsByUserId, updateProfessionalsController} from '../controllers/professionalController';
import { upload } from '../middleware/uploadMiddleware';

const router = express.Router();



router.post('/upload', upload.single("file"), uploadProfessionalController);
router.get('/all', getProfessionalsController);
router.put('/update/:id', upload.single("file"), updateProfessionalsController);
router.get('/:userId', getProfessionalsByUserId);
router.get('/getData/:id', getProfessionalsById);
router.delete('/:id', deleteProfessionalsById);
export default router;