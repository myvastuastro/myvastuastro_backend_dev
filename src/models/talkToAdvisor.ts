import mongoose from "mongoose";
const talktoadvisorSchema = new mongoose.Schema({
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
  },
  appointment: [
    {
      date: {
        type: Date, // e.g. 2025-05-14
        required: true
      },
      times: [
        {
          type: String // e.g. "10:00 AM", "3:30 PM"
        }
      ]
    }
  ]

}, {
  timestamps: true
});

const question = mongoose.model('vastuTalkToAdvisor', talktoadvisorSchema);
export default question;