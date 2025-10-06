import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  mobile: {
    type: String,
    required: true
  },
  password:{
    type: String,
    required: false
  },
  role: { type: [String], enum: ["user", "astrologer", "admin", "vastuAstrologer"], required: true , default: ["user"]},
  otp:{
    type: String,
    required: false,
    default: '123456'
  },
  country_code:{
    type: String,
    required: false,
    default: '91'
  },
  status:{
    type: Number,
    required: true, 
    default: 1
  }, 
  address:{
    type: String,
    required: false
  }

}, {
  timestamps: true
});

const user = mongoose.model('user', userSchema);
export default user;