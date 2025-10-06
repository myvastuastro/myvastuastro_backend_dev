import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userToken from '../models/userToken'; // adjust path

dotenv.config();

async function addCountryCodeToExistingUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);
    const result = await userToken.updateMany(
      { astrologerId: { $exists: false } }, // only update docs without country_code
      { $set: { astrologerId: null } } // set default country code
    );
    console.log(`Updated ${result.modifiedCount} users with default address`);
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error updating users:', error);
  }
}

addCountryCodeToExistingUsers();

//script to compile code 
//npx ts-node src/scripts/migrateUserToken.ts
