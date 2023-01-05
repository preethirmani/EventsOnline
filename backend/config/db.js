import mongoose, { mongo } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology : true,
      useNewUrlParser : true
    })
    console.log(`Mongodb connected :: ${ conn.connection.host}`);

  } catch (error) {
    console.error(`Error : ${error.message}`);
    process.exit(1);
  }

}

export default connectDB;