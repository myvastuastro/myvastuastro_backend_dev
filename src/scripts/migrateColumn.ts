import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from '../models/user'; // adjust path

dotenv.config();

async function addCountryCodeToExistingUsers() {
  try {
    await mongoose.connect(process.env.MONGO_URI!);

    const result = await User.updateMany(
      { country_code: { $exists: false } }, // only update docs without country_code
      { $set: { country_code: '91' } } // set default country code
    );

    console.log(`Updated ${result.modifiedCount} users with default country_code`);
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error updating users:', error);
  }
}

addCountryCodeToExistingUsers();
