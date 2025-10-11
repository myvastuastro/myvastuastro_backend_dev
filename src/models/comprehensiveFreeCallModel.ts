import mongoose from "mongoose";
const comprehensivefreeCallSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user",
    required: false
  },
   professionalId: {
    type: mongoose.Types.ObjectId,
    ref: "vastuProfessional",
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
  ],
   status: {
      type: String,
      enum: ["pending", "attended", "missed", "rescheduled"],
      default: "pending",
    },

    astrologerNotes: {
      type: String,
      required: false,
      default: "",
    },

}, {
  timestamps: true
});

const comprehensive = mongoose.model('vastuFreeCallComprehensive', comprehensivefreeCallSchema);
export default comprehensive;