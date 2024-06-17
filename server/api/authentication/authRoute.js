import { Router } from "express";
import Login from '../../controllers/Login.js';
import Register from '../../controllers/Register.js';

const  authRoute = Router();

authRoute.post('/login',Login);
authRoute.post('/register', Register);



export default authRoute;