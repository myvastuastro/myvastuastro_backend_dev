import mongoose from "mongoose";
const quoteSchema = new mongoose.Schema({
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
  region: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  type:{
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  floor:{
    type: String,
    required: true
  },
  message:{
    type: String,
    required: true
  }

}, {
  timestamps: true
});

const quote = mongoose.model('quote', quoteSchema);
export default quote;