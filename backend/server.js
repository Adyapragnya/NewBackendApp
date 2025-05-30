import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import paymentRoutes from './routes/paymentRoutes.js'
import maintenanceRoutes from './routes/maintenance.js';
import userDetailsRoutes from './routes/userDetailsRoutes.js';
import tenantDetailsRoutes from './routes/tenantDetailsRoutes.js';
import loginDetailsRoutes from './routes/loginDetailsRoutes.js';

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/payment', paymentRoutes);

app.use('/api', maintenanceRoutes);

app.use('/api', userDetailsRoutes);

app.use('/api', tenantDetailsRoutes);

app.use('/api/auth', loginDetailsRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));