import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'super-secret-mock-key';

export const verifyToken = (token: string) => {
  // Mock validation logic
  return jwt.verify(token, JWT_SECRET);
};

export const generateToken = (payload: object) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
};
