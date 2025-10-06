import mongoose from "mongoose";
const adminSupportSchema = new mongoose.Schema({
  name: {
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

const support =  mongoose.model('vastuAdminSupport', adminSupportSchema);

export default support;