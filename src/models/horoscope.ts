import mongoose from "mongoose";
const horoscopeSchema = new mongoose.Schema({
  sign: {
    type: String,
    required: true
  },
   date: {
    type: String,
    required: true
  },
   content: {
    type: String,
    required: true
  },
   mood: {
    type: String,
    required: true
  },
   luckyNumber: {
    type: String,
    required: true
  },
   luckyColor: {
    type: String,
    required: true
  },
  

}, {
  timestamps: true
});
horoscopeSchema.index({ sign: 1, date: 1 }, { unique: true });

const horoscope =  mongoose.model('horoscope', horoscopeSchema);

export default horoscope;