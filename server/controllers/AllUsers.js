import User from '../models/UserModel.js';

const AllUsers = async (req, res, next) => {
    try {
        // Fetch users with role "user"
        const userList = await User.find({ role: "user" });

        // Check if any users were found
        if (userList.length === 0) {
            return res.status(404).json({ message: 'Users not found', success: false });
        }

        // Send response
        res.status(200).json({ message: "User list sent", success: true, userList });

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};

export default AllUsers;
