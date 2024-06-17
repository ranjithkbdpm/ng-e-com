import { Router } from "express";
import AllUsers from "../../controllers/AllUsers.js";

const  userList = Router();

userList.get('/all-users', AllUsers);


export default userList;