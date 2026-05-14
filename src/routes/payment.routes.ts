import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';
import { validatePaymentInput } from '../middleware/validator.middleware'; // NEW

const router = Router();

router.post('/api/v1/payments', 
  authMiddleware, 
  validatePaymentInput, // NEW: Added validation step
  (req, res) => {
    res.status(200).json({ message: 'Payment processed successfully' });
});
