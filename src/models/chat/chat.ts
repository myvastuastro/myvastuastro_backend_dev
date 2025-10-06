import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: String,
  astrologerId: String,
  startedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['pending', 'active', 'closed'], default: 'pending' }
});

const chat =  mongoose.model('astrologyChat', chatSchema);

export default chat;