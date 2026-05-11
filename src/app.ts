import express from 'express';
import paymentRoutes from './routes/payment.routes';

const app = express();
app.use(express.json());

// Wire up the routes
app.use(paymentRoutes);

export default app;
