import { Request, Response } from "express";
import { SelfProductService } from "../services/selfProductService";




export async function uploadSelfProductController(req: Request, res: Response) {
  try {
    const { userId, productName } = req.body;
    const file = req.file as Express.Multer.File;
    if (!file) {
       res.status(400).json({ message: 'File is required', status: 'fail' });
       return;
    }
    const fileSize = file.size || 0;
    if (fileSize === 0) {
       res.status(400).json({ message: 'Uploaded file is empty', status: 'fail' });
       return;
    }
    const fileUrl = file.path;
    const product = await SelfProductService.uploadProduct({ userId, productName, fileUrl });
    if (product) {
       res.status(200).json({
        message: 'File uploaded successfully',
        data: product,
        status: 'success',
        statusCode: 200
      });
    } else {
       res.status(400).json({
        message: 'Upload failed',
        status: 'fail',
        statusCode: 400
      });
    }

  } catch (error) {
    console.error('Upload error:', error);

    // ✅ Prevent double-send
    if (!res.headersSent) {
       res.status(500).json({
        message: 'Server error during upload',
        status: 'fail',
        statusCode: 500,
        error
      });
    }
  }
}


// export async function uploadSelfProductController(req: Request, res: Response) {
//   try {
//     const { userId, productName } = req.body;
//     const files = req.files as {
//       [fieldname: string]: Express.Multer.File[];
//     };
//     const file = files?.file?.[0];

//     if (!file) {
//        res.status(400).json({ message: "File is required" }); // ✅ return added
//     }

//     if (file.size === 0) {
//        res.status(400).json({ message: "Uploaded file is empty", status: "fail" }); // ✅ return added
//     }

//     const fileUrl = file.path;

//     const product = await SelfProductService.uploadProduct({ userId, productName, fileUrl });

//     if (product) {
//        res.status(200).json({
//         message: 'File uploaded successfully',
//         data: product,
//         status: "success",
//         statusCode: 200
//       });
//     } else {
//        res.status(400).json({
//         message: 'Failed',
//         status: "fail",
//         statusCode: 400,
//         data: product
//       });
//     }

//   } catch (error) {
//     console.error("Upload error:", error);
//      res.status(400).json({
//       message: 'Error uploading product',
//       status: "fail",
//       statusCode: 400,
//       data: error
//     });
//   }
// }

// export async function  uploadSelfProductController(req: Request, res: Response){
//   try {
//     const { userId, productName } = req.body;
//     const files = req.files as {
//         [fieldname: string]: Express.MulterS3.File[];
//     };
//     const file = files?.file?.[0];
//      if (!file) {
//        res.status(400).json({ message: "File is required" });
//     }

//     // ✅ OPTIONAL VALIDATION
//     if (file.size === 0) {
//        res.status(400).json({ message: "Uploaded file is empty", status: "fail" });
//     }
//     const fileUrl = file.location;
//     const product = await SelfProductService.uploadProduct({ userId, productName, fileUrl });
//      if (product) {
//       res.status(200).json({ message: 'file uploaded successful', data: product, status: "success", statusCode: 200 });
//   } else {
//       res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: product });
//   }
//   } catch (error) {
//      res.status(400).json({ message: 'Error uploading product', status: "fail", statusCode: 400, data: error });

//   }
// };

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
