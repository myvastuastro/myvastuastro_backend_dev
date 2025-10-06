import mongoose from "mongoose";
const questionSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user", 
    required: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: Number,
    required: true
  },
  message:{
    type: String,
    required: true
  }

}, {
  timestamps: true
});

const question = mongoose.model('vastuQuestion', questionSchema);
export default question;