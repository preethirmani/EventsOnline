import express from 'express';
import dotenv from 'dotenv';
import programs from './data/programs.js';
import connectDB from './config/db.js';
import programRoutes from './routes/programRoutes.js';
import userRoutes from './routes/userRoutes';

const app = express();
dotenv.config();
await connectDB();

//routes
app.use(express.json());
app.use('/api/programs', programRoutes);
app.use('/api/user', userRoutes);
  


const PORT = 8800 | process.env.PORT;
app.listen(PORT, console.log(`Server is running on port: ${PORT}`));