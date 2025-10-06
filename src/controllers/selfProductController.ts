import { Request, Response } from "express";
import { SelfProductService } from "../services/selfProductService";


export async function uploadSelfProductController(req: Request, res: Response) {
  try {
    const { userId, productName } = req.body;
    const file = req.file as Express.Multer.File;

    if (!file) {
      return res.status(400).json({ message: "File is required", status: "fail" });
    }

    if (!file.size) {
      return res.status(400).json({ message: "Uploaded file is empty", status: "fail" });
    }

    // ✅ Determine resource type automatically
    const ext = file.originalname.split(".").pop()?.toLowerCase();
    let resourceType: "image" | "raw" = "raw";
    if (["jpg", "jpeg", "png", "webp"].includes(ext!)) resourceType = "image";
    const fileUrl = (file as any).path;
    const downloadUrl = fileUrl.replace("/upload/", "/upload/fl_attachment/");
    const product = await SelfProductService.uploadProduct({
      userId,
      productName,
      fileUrl,
      resourceType,  // ✅ fixed
      mimeType: file.mimetype,
      originalName: file.originalname,
    });

    if (!product) {
      return res.status(400).json({ message: "Upload failed", status: "fail" });
    }

    res.status(200).json({
      message: "File uploaded successfully",
      data: { ...product.toObject(), downloadUrl },
      status: "success",
    });
  } catch (error) {
    console.error("Upload error:", error);
    if (!res.headersSent) {
      res.status(500).json({
        message: "Server error during upload",
        status: "fail",
        error: error instanceof Error ? error.message : error,
      });
    }
  }
}


// export async function uploadSelfProductController(req: Request, res: Response) {
//   try {
//     const { userId, productName } = req.body;
//     const file = req.file as Express.Multer.File;

//     if (!file) return res.status(400).json({ message: 'File is required', status: 'fail' });
//     if (!file.size) return res.status(400).json({ message: 'Uploaded file is empty', status: 'fail' });

//     const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
//     if (!allowedTypes.includes(file.mimetype)) {
//       return res.status(400).json({ message: 'Invalid file type', status: 'fail' });
//     }

//     const fileUrl = (file as any).path;
//     const downloadUrl = fileUrl.replace("/upload/", "/upload/fl_attachment/");
//     const resourceType = (file as any).resource_type;

//     const product = await SelfProductService.uploadProduct({
//       userId,
//       productName,
//       fileUrl,
//       originalName: file.originalname,
//       mimeType: file.mimetype,
//       resourceType
//     });

//     res.status(200).json({
//       message: 'File uploaded successfully',
//       data: { ...product.toObject(), downloadUrl },
//       status: 'success'
//     });

//   } catch (error) {
//     console.error('Upload error:', error);
//     if (!res.headersSent) {
//       res.status(500).json({
//         message: 'Server error during upload',
//         status: 'fail',
//         error: error instanceof Error ? error.message : error
//       });
//     }
//   }
// }

// export async function uploadSelfProductController(req: Request, res: Response) {
//   try {
//     const { userId, productName } = req.body;
//     const file = req.file as Express.Multer.File;

//     if (!file) return res.status(400).json({ message: 'File is required', status: 'fail' });
//     if (!file.size) return res.status(400).json({ message: 'Uploaded file is empty', status: 'fail' });

//     // Optional: validate MIME type
//     const allowedTypes = ["application/pdf", "image/jpeg", "image/png"];
//     if (!allowedTypes.includes(file.mimetype)) {
//       return res.status(400).json({ message: 'Invalid file type', status: 'fail' });
//     }

//     const fileUrl = file.path;
//     const downloadUrl = fileUrl.replace("/upload/", "/upload/fl_attachment/"); // optional

//     const product = await SelfProductService.uploadProduct({ userId, productName, fileUrl });

//     if (!product) {
//       return res.status(400).json({ message: 'Upload failed', status: 'fail' });
//     }

//     res.status(200).json({
//       message: 'File uploaded successfully',
//       data: { ...product, downloadUrl },
//       status: 'success'
//     });

//   } catch (error) {
//     console.error('Upload error:', error);

//     if (!res.headersSent) {
//       res.status(500).json({
//         message: 'Server error during upload',
//         status: 'fail',
//         error: error instanceof Error ? error.message : error
//       });
//     }
//   }
// }


// export async function uploadSelfProductController(req: Request, res: Response) {
//   try {
//     const { userId, productName } = req.body;
//     const file = req.file as Express.Multer.File;
//     if (!file) {
//        res.status(400).json({ message: 'File is required', status: 'fail' });
//        return;
//     }
//     const fileSize = file.size || 0;
//     if (fileSize === 0) {
//        res.status(400).json({ message: 'Uploaded file is empty', status: 'fail' });
//        return;
//     }
//     const fileUrl = file.path;
//     const product = await SelfProductService.uploadProduct({ userId, productName, fileUrl });
//     if (product) {
//        res.status(200).json({
//         message: 'File uploaded successfully',
//         data: product,
//         status: 'success',
//         statusCode: 200
//       });
//     } else {
//        res.status(400).json({
//         message: 'Upload failed',
//         status: 'fail',
//         statusCode: 400
//       });
//     }

//   } catch (error) {
//     console.error('Upload error:', error);

//     // ✅ Prevent double-send
//     if (!res.headersSent) {
//        res.status(500).json({
//         message: 'Server error during upload',
//         status: 'fail',
//         statusCode: 500,
//         error
//       });
//     }
//   }
// }




export async function  getAllSelfProductsController(_req: Request, res: Response) {
try {
   const products = await SelfProductService.listProducts();
   if (products) {
       res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
   } else {
       res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
   }

} catch (error) {
   res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
}
};


export async function  getSelfProductsController(_req: Request, res: Response) {
try {
   const { userId } = _req.params;
   const products = await SelfProductService.getSelfProductsController(userId);
   if (products) {
       res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
   } else {
       res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
   }

} catch (error) {
   res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
}
};



export async function  getSelfProductsControllerById(_req: Request, res: Response) {
try {
   const { id } = _req.params;
   const products = await SelfProductService.getSelfProductsControllerById(id);
   if (products) {
       res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
   } else {
       res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
   }

} catch (error) {
   res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
}
};


export async function  updateSelfProductsController(req: Request, res: Response) {
  

   try {
      const { id } = req.params;
      const products = await SelfProductService.updateProducts(id, req.body);
      if (products) {
          res.status(200).json({ message: 'Update successful', data: products, status: "success", statusCode: 200 });
      } else {
          res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
      }

  } catch (error) {
      res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
  }
 };



 

export async function deleteSelfProductsControllerById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const askQuestion = await SelfProductService.deleteSelfProductsControllerById(id);
        if (askQuestion) {
            res.status(200).json({ message: 'Delete successful', data: askQuestion, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
        }
    } catch (error) {
        res.status(400).json({ message: 'Self Product not found', status: "fail", statusCode: 400, data: error });
    }
}
