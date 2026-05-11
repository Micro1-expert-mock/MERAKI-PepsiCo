import { Router } from 'express';
import { authMiddleware } from '../middleware/auth.middleware';

const router = Router();

// This is a protected route
router.post('/api/v1/payments', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Payment processed successfully' });
});

export default router;
