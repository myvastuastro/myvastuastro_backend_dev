import mongoose from "mongoose";
const vastuAstroglerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  exp: {
    type: Number,
    required: true
  },
  charge: {
    type: Number,
    required: true
  },
  industryExp: {
    type: Number,
    default: 0
  },
  commercialExp: {
    type: Number,
    default: 0
  },
  residentialExp: {
    type: Number,
    default: 0
  },
  availability: [
    {
      date: {
        type: Date
      },
      times: [
        {
          type: String // e.g. "10:00 AM", "3:30 PM"
        }
      ]
    }
  ],
  projectsAcross: { type: Number, default: 0 },
  countriesAcrossTheWorld: { type: Number, default: 0 },
  skills: { type: [String], default: [] },
  educationBackground: { type: String, default: "" },
  rating: { type: Number, default: 0 },
  satisfiedUsers: { type: Number, default: 0 },
  reviews: { type: Number, default: 0 },
}, {
  timestamps: true
});

const vastuAstrogler = mongoose.model('vastuAstrogler', vastuAstroglerSchema);
export default vastuAstrogler;