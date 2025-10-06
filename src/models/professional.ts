import mongoose from "mongoose";
const professionalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    ref: "user", 
    required: false
  },
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
  address:{
    type: String,
    required: true
  },
  typeOfProperty:{
    type: String,
    required: true
  },
  sizePerFloor:{
    type: Number,
    required: false
  },
  sizeType:{
    type: String,
    required: true
  },
  noOfFloor:{
    type: Number,
    required: true
  },
  googlelink:{
    type: String,
    required: false
  },
  country:{
    type: String,
    required: false
  },
  city:{
    type: String,
    required: false
  },
  state:{
    type: String,
    required: false
  },
  propertyAddress:{
    type: String,
    required: false
  },
  floorPlan:{
    type: Boolean,
    required: true
  },
  floorlink:{
    type: String,
    required: false
  },
  message:{
    type: String,
    required: false
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
  ]

}, {
  timestamps: true
});

const user = mongoose.model('vastuProfessional', professionalSchema);
export default user;