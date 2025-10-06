import mongoose from "mongoose";
const comprehensiveSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: false
  },
  vastuAstrologerId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: false
  },
  comprehensive: [
    {
      date: {
        type: Date, 
        required: true
      },
      times: [
        {
          type: String 
        }
      ]
    }
  ]

}, {
  timestamps: true
});

const comprehensive = mongoose.model('vastuComprehensive', comprehensiveSchema);
export default comprehensive;