import admin from "firebase-admin";
import fs from "fs";
import path from "path";

let serviceAccount: admin.ServiceAccount;

// ✅ 1. If Railway env variable exists, decode and use it
if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
  try {
    const decoded = Buffer.from(
      process.env.FIREBASE_SERVICE_ACCOUNT_BASE64,
      "base64"
    ).toString("utf8");
    serviceAccount = JSON.parse(decoded);
  } catch (error) {
    console.error("❌ Failed to parse FIREBASE_SERVICE_ACCOUNT_BASE64");
    throw error;
  }
} else {
  // ✅ 2. Fallback for local development (uses JSON file)
  const serviceAccountPath = path.resolve(
    __dirname,
    "../firebase/firebaseServiceAccountKey.json"
  );

  if (!fs.existsSync(serviceAccountPath)) {
    throw new Error(
      "Service account key file not found and FIREBASE_SERVICE_ACCOUNT_BASE64 not set"
    );
  }

  serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));
}

// ✅ Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export default admin;

// import admin from 'firebase-admin';
// import serviceAccount from '../firebase/firebaseServiceAccountKey.json';

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });

// export default admin;
