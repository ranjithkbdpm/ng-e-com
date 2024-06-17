import express from 'express';
import http from 'http';
import { port } from './config.js';
import { connectDB } from './utilities/db_connect.js';
import api from './api/index.js';
import cors from 'cors';
import cookieParser from 'cookie-parser';

// Create Express app
const app = express();

app.use(cors({
    origin:["http://localhost:4000"],
    method:["GET","PUT","POST","PATCH","DELETE"],
    credentials:true
}));

app.use(cookieParser());
app.use(express.json());

// Mount the API router after cookie-parser and parsing json()
app.use('/api', api); 

// Create HTTP server
const server = http.createServer(app);

const startServer = async () => {
    await connectDB();

    server.listen(port, () => {
        console.log(`Express server listening on port ${port}`);
    });

    server.setTimeout(10 * 60 * 1000); 
};

startServer();

export default app;
