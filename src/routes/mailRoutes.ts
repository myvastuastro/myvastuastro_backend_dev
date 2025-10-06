import express from 'express';
import { sendMailController } from '../controllers/mailController.js';

const router = express.Router();
router.post('/send-email', sendMailController);

export default router;
