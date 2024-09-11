import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
    required: true,
  },
  pass: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    trim: true,
    lowercase: true,
    required: true,
  },
  is_verified: {
    type: Boolean,
    default: false,
    required: true,
  },
});

mongoose.model("User", userSchema);
