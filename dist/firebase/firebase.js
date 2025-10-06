"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const firebase_admin_1 = __importDefault(require("firebase-admin"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
let serviceAccount;
// ✅ 1. If Railway env variable exists, decode and use it
if (process.env.FIREBASE_SERVICE_ACCOUNT_BASE64) {
    try {
        const decoded = Buffer.from(process.env.FIREBASE_SERVICE_ACCOUNT_BASE64, "base64").toString("utf8");
        serviceAccount = JSON.parse(decoded);
    }
    catch (error) {
        console.error("❌ Failed to parse FIREBASE_SERVICE_ACCOUNT_BASE64");
        throw error;
    }
}
else {
    // ✅ 2. Fallback for local development (uses JSON file)
    const serviceAccountPath = path_1.default.resolve(__dirname, "../firebase/firebaseServiceAccountKey.json");
    if (!fs_1.default.existsSync(serviceAccountPath)) {
        throw new Error("Service account key file not found and FIREBASE_SERVICE_ACCOUNT_BASE64 not set");
    }
    serviceAccount = JSON.parse(fs_1.default.readFileSync(serviceAccountPath, "utf8"));
}
// ✅ Initialize Firebase Admin SDK
if (!firebase_admin_1.default.apps.length) {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(serviceAccount),
    });
}
exports.default = firebase_admin_1.default;
// import admin from 'firebase-admin';
// import serviceAccount from '../firebase/firebaseServiceAccountKey.json';
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount as admin.ServiceAccount),
// });
// export default admin;
