import mongoose from "mongoose";

const selfProductSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
  productName: { type: String, required: true },
  fileUrl: { type: String, required: true },
  originalName: { type: String, required: true },
  mimeType: { type: String, required: true },
  resourceType: { type: String, enum: ["image", "raw"], required: true }
}, {
  timestamps: true
});

const SelfProduct = mongoose.model("vastuSelfProduct", selfProductSchema);
export default SelfProduct;
// import mongoose from "mongoose";
// const selfProductSchema = new mongoose.Schema({
//   userId: {
//     type: mongoose.Types.ObjectId,
//     ref: "user", 
//     required: false
//   },
//   productName: {
//     type: String,
//     required: false
//   },
//   fileUrl: {
//     type: String,
//     required: false 
//   }
// }, {
//   timestamps: true
// });

// const product = mongoose.model("vastuSelfProduct", selfProductSchema);
// export default product;
