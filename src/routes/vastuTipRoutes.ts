import express from 'express';
import { uploadVastuTipController,getVastuTipsControllerById,deleteVastuTipsController, getVastuTipsController, updateVastuTipsController } from '../controllers/vastuTipController';
import { upload } from '../middleware/uploadMiddleware';
const router = express.Router();
router.post('/create', upload.fields([
    { name: 'file', maxCount: 1 },     // for image or main file
    { name: 'audio', maxCount: 1 },    // for audio file
]), uploadVastuTipController);
router.get('/all', getVastuTipsController);
router.put('/update/:id', upload.fields([
    { name: 'file', maxCount: 1 },     // for image or main file
    { name: 'audio', maxCount: 1 },    // for audio file
]), updateVastuTipsController);
router.get('/:id', getVastuTipsControllerById);
router.delete('/:id', deleteVastuTipsController);

export default router;