import { Router } from 'express';
import PaymentController from '../controllers/PaymentController';

const router = Router();

router.post('/payment', PaymentController.processPayment);

export default router;
