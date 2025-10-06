import mongoose from "mongoose";
const selfProductSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user", 
    required: false
  },
  productName: {
    type: String,
    required: false
  },
  fileUrl: {
    type: String,
    required: false 
  }
}, {
  timestamps: true
});

const product = mongoose.model("vastuSelfProduct", selfProductSchema);
export default product;
