import mongoose from "mongoose";
const appointmentImportantCallSchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: true
  },

  appointment: [
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
      enum: ["pending", "success", "missed"],
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

const appointment =  mongoose.model('vastuAppointmentImportantCall', appointmentImportantCallSchema);

export default appointment;