import mongoose from "mongoose";
const supportSchema = new mongoose.Schema({
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
  message: {
    type: String,
    required: true
  },

  support: [
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

const support =  mongoose.model('vastuSupport', supportSchema);

export default support;