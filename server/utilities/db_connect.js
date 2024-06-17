import mongoose from 'mongoose';
import { mongodb } from '../config.js';

export const connectDB = async () => {
    try {
        await mongoose.connect(mongodb);
        console.log('DB connection successful');
    } catch (err) {
        console.error('DB connection failed', err);
        process.exit(1); 
        
        // Exit process with failure  it is used to ensure that the application does not continue running if the database connection fails. 
        // The process.exit() method instructs Node.js to terminate the process synchronously with an exit status of code. If code is omitted, exit uses either the 'success' code 0 or the value of process.exitCode if it has been set. Node.js will not terminate until all the 'exit' event listeners are called.
    }
};

