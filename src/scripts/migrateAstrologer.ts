import mongoose from "mongoose";
import dotenv from "dotenv";
import vastuAstrogler from "../models/vastuAstrologer"; // adjust path

dotenv.config();

async function addNewFieldsToVastuAstroglers() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    console.log("✅ Connected to MongoDB");

    const result = await vastuAstrogler.updateMany(
      {
        $or: [
          { astrologerId: { $exists: false } }
          // { experience: { $exists: false } },
          // { projectsAcross: { $exists: false } },
          // { countriesAcrossTheWorld: { $exists: false } },
          // { skills: { $exists: false } },
          // { educationBackground: { $exists: false } }
        ]
      },
      {
        $set: {
          astrologerId: null,
          // experience: "",
          // projectsAcross: 0,
          // countriesAcrossTheWorld: 0,
          // skills: [],
          // educationBackground: ""
        }
      }
    );

    console.log(`✅ Updated ${result.modifiedCount} vastuAstrogler documents`);
    await mongoose.disconnect();
  } catch (error) {
    console.error("❌ Error updating vastuAstrogler documents:", error);
  }
}

addNewFieldsToVastuAstroglers();
