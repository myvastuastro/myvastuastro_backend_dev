"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const multer_1 = __importDefault(require("multer"));
const multer_storage_cloudinary_1 = require("multer-storage-cloudinary");
const cloudinary_1 = __importDefault(require("../config/cloudinary"));
const storage = new multer_storage_cloudinary_1.CloudinaryStorage({
    cloudinary: cloudinary_1.default,
    params: (_req, file) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        const ext = (_a = file.originalname.split('.').pop()) === null || _a === void 0 ? void 0 : _a.toLowerCase();
        // let resourceType: 'image' | 'raw' = 'image';
        // if (ext === 'pdf' || ext === 'doc' || ext === 'docx') {
        //   resourceType = 'raw';
        // }
        return {
            folder: 'myvastuastro_storage',
            resource_type: ext === 'pdf' ? 'raw' : 'auto', // PDFs as raw
            public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
            format: ext,
            use_filename: true,
            unique_filename: false,
        };
    }),
});
exports.upload = (0, multer_1.default)({ storage });
// import multer from 'multer';
// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import cloudinary from '../config/cloudinary';
// const storage = new CloudinaryStorage({
//   cloudinary,
//   params: async (_req, file) => {
//     const ext = file.originalname.split('.').pop()?.toLowerCase();
//     let resourceType = 'image';
//     if (ext === 'pdf' || ext === 'doc' || ext === 'docx' || ext === 'txt') {
//       resourceType = 'raw';
//     } else if (['mp3', 'wav', 'aac', 'm4a'].includes(ext || '')) {
//       resourceType = 'video';
//     }
//     return {
//       folder: 'myvastuastro_storage',
//       resource_type: resourceType,
//       public_id: `${Date.now()}-${file.originalname}`,
//       format: undefined,
//     };
//   },
// });
// export const upload = multer({ storage });
