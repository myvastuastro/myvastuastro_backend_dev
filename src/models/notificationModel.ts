import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
  deviceToken: {
    type: [String],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
},{timestamps: true});

// TTL index: 10 days = 864000 seconds
//notificationSchema.index({ sentAt: 1 }, { expireAfterSeconds: 864000 });
notificationSchema.index({ createdAt: 1 }, { expireAfterSeconds: 10 * 24 * 60 * 60 });

const notification = mongoose.model('notification', notificationSchema);

export default notification;
