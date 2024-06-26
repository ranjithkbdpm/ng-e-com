import dotenv from 'dotenv';

dotenv.config();

export const mongodb = process.env.MONGODB_URI;
export const port = process.env.PORT;
export const secret_key = process.env.TOKEN_KEY;