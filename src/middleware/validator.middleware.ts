import { Request, Response, NextFunction } from 'express';

export const validatePaymentInput = (req: Request, res: Response, next: NextFunction) => {
  const { amount, currency, orderId } = req.body;

  if (!amount || amount <= 0) {
    return res.status(400).json({ error: 'Invalid amount' });
  }

  if (!['USD', 'EUR', 'GBP'].includes(currency)) {
    return res.status(400).json({ error: 'Unsupported currency' });
  }

  if (!orderId) {
    return res.status(400).json({ error: 'Order ID is required' });
  }

  next();
};
