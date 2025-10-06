import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import cloudinary from '../config/cloudinary';

const storage = new CloudinaryStorage({
  cloudinary,
  params: async (_req, file) => {
    const ext = file.originalname.split('.').pop()?.toLowerCase();

    let resourceType: 'image' | 'video' | 'raw' | 'auto' = 'image';
    if (['pdf', 'doc', 'docx', 'txt'].includes(ext || '')) {
      resourceType = 'raw';
    } else if (['mp3', 'wav', 'aac', 'm4a', 'mp4', 'mov'].includes(ext || '')) {
      resourceType = 'video';
    } else {
      resourceType = 'auto'; // handles images automatically
    }

    return {
      folder: 'myvastuastro_storage',
      resource_type: resourceType,
      public_id: `${Date.now()}-${file.originalname.split('.')[0]}`,
      format: ext,
      use_filename: true,
      unique_filename: false,
    };
  },
});

export const upload = multer({ storage });

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