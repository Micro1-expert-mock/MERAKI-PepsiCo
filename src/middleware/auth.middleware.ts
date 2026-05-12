import { Request, Response, NextFunction } from 'express';
import { verifyToken } from '../services/auth.service';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Missing or invalid token' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = verifyToken(token);
    (req as any).user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Authentication failed' });
  }
};
// ... existing imports
  try {
    const decoded = verifyToken(token);
    // NEW: Check for exp claim
    if ((decoded as any).exp < Date.now() / 1000) {
      return res.status(401).json({ error: 'Token expired' });
    }
    (req as any).user = decoded;
    next();
// ...
