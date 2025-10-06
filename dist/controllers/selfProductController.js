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
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadSelfProductController = uploadSelfProductController;
exports.getAllSelfProductsController = getAllSelfProductsController;
exports.getSelfProductsController = getSelfProductsController;
exports.getSelfProductsControllerById = getSelfProductsControllerById;
exports.updateSelfProductsController = updateSelfProductsController;
exports.deleteSelfProductsControllerById = deleteSelfProductsControllerById;
const selfProductService_1 = require("../services/selfProductService");
function uploadSelfProductController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId, productName } = req.body;
            const file = req.file;
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
            const product = yield selfProductService_1.SelfProductService.uploadProduct({ userId, productName, fileUrl });
            if (product) {
                res.status(200).json({
                    message: 'File uploaded successfully',
                    data: product,
                    status: 'success',
                    statusCode: 200
                });
            }
            else {
                res.status(400).json({
                    message: 'Upload failed',
                    status: 'fail',
                    statusCode: 400
                });
            }
        }
        catch (error) {
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
    });
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
function getAllSelfProductsController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const products = yield selfProductService_1.SelfProductService.listProducts();
            if (products) {
                res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getSelfProductsController(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = _req.params;
            const products = yield selfProductService_1.SelfProductService.getSelfProductsController(userId);
            if (products) {
                res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function getSelfProductsControllerById(_req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = _req.params;
            const products = yield selfProductService_1.SelfProductService.getSelfProductsControllerById(id);
            if (products) {
                res.status(200).json({ message: 'Find successful', data: products, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function updateSelfProductsController(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const products = yield selfProductService_1.SelfProductService.updateProducts(id, req.body);
            if (products) {
                res.status(200).json({ message: 'Update successful', data: products, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: products });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Error fetching products', status: "fail", statusCode: 400, data: error });
        }
    });
}
;
function deleteSelfProductsControllerById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const askQuestion = yield selfProductService_1.SelfProductService.deleteSelfProductsControllerById(id);
            if (askQuestion) {
                res.status(200).json({ message: 'Delete successful', data: askQuestion, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: askQuestion });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Self Product not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
