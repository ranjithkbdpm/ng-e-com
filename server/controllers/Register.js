import User from '../models/UserModel.js';
import createJWToken from '../utilities/createJWToken.js';


const Register = async (req, res, next) => {
  try {
    //getting request from port listening
    const { firstname, lastname, email, password, phone } = req.body;
    const createdAt = Date.now();

    //checking email and username already exist in the collection
    const existingUser = await User.findOne({ $or: [{ email },{phone}]});

    //if yes, send msg user exist,  if no create user
    if (existingUser) {
      return res.json({ message: "User already exists", success:false });
    }   
    else {
        
      const user = await User.create({ firstname, lastname, email, password, phone, createdAt});

      //creating jwt token with userid
      const token = createJWToken(user._id);
      res.cookie("token", token, { withCredentials: true, httpOnly: true });
      res.status(201)
      res.json({ message: "User created successfully", success: true, user });
      next();
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export default Register;