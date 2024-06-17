import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

//schema definition using 
const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: [true, "Your firstname is required"],
  },
  lastname: {
    type: String,
    required: [true, "Your lastname is required"],
  },
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  phone: {
    type: String,
    required: [true, "Your phone number is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // Define the roles you need
    default: 'user'
  },
  createdAt: {
    type: Date,
    default: new Date(),
  }
});

userSchema.pre("save", async function () {
  this.password = await bcrypt.hash(this.password, 12);
});


//model creation
const User = mongoose.model("User", userSchema);

export default User;