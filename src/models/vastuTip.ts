import mongoose from "mongoose";
const vastuTipSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  audioUrl:{
    type:String,
    required:true
  }, 
  fileUrl: {
    type: String,
    required:true
  }
}, {
  timestamps: true
});

const vastuTip =  mongoose.model('vastuTip', vastuTipSchema);

export default vastuTip;