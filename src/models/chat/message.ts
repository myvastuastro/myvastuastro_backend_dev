import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  chatId: { type: mongoose.Schema.Types.ObjectId, ref: 'Chat' },
  fromId: { type: String, required: true },
  fromRole: { type: String, enum: ['user', 'astrologer'], required: true  },
  text: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const message =  mongoose.model('astrologyMessage', messageSchema);
export default message;