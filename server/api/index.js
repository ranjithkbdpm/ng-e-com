import { Router } from "express";
import authRoute from './authentication/authRoute.js'
import userList from "./adminDash/userList.js";

const api = Router();

api.use('/auth', authRoute);
api.use('/admin', userList);



export default api;