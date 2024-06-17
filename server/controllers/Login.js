import User from '../models/UserModel.js';
import createJWToken from '../utilities/createJWToken.js';
import bcrypt from 'bcrypt';

const Login = async (req, res, next) => {
    try {
        // Destructure the request
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }

        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Incorrect email', success: false });
        }

        const userDetails = {
            firstname : user?.firstname,
            lastname : user?.lastname,
            email : user?.email,
            phone : user?.phone
        }

        // Check if the password matches the user.password
        const auth = await bcrypt.compare(password, user.password);
        if (!auth) {
            return res.status(401).json({ message: 'Incorrect password', success: false });
        }else{
            // Create JWT token
            const token = createJWToken(user._id, user.role);
        
            // Set the token in the cookie
             res.cookie("token", token, { withCredentials: true, httpOnly: true });

            // Send response
            res.status(200).json({ message: "Login successfully", success: true, userDetails });

            next();
        }

        
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export default Login;
