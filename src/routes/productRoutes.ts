import express from 'express';
import {uploadSelfProductController,getAllSelfProductsController,deleteSelfProductsControllerById, getSelfProductsController, updateSelfProductsController,getSelfProductsControllerById} from '../controllers/selfProductController';
const router = express.Router();
import { upload } from '../middleware/uploadMiddleware';

router.post('/upload', upload.single("file"), uploadSelfProductController);
router.get('/all', getAllSelfProductsController);
router.get('/:userId', getSelfProductsController);
router.get('/getById/:id', getSelfProductsControllerById);
router.put('/update/:id', upload.single("file"), updateSelfProductsController);
router.delete('/:id', deleteSelfProductsControllerById);
export default router;