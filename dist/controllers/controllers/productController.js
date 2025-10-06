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
exports.createProduct = createProduct;
exports.getProductById = getProductById;
exports.getProductByUserId = getProductByUserId;
exports.updateProduct = updateProduct;
exports.deleteProduct = deleteProduct;
exports.getProductAll = getProductAll;
const productService_1 = require("../../services/services/productService");
function createProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const data = Object.assign(Object.assign({}, req.body), { file: req.file });
            const productService = yield productService_1.ProductService.createProduct(data);
            if (productService) {
                res.status(200).json({ message: 'Submit successful', data: productService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getProductById(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productService = yield productService_1.ProductService.getProductById(id);
            if (productService) {
                res.status(200).json({ message: 'Find successful', data: productService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getProductByUserId(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { userId } = req.params;
            const productService = yield productService_1.ProductService.getProductByUserId(userId);
            if (productService) {
                res.status(200).json({ message: 'Find successful', data: productService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function updateProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productService = yield productService_1.ProductService.updateProduct(id, req.body);
            if (productService) {
                res.status(200).json({ message: 'Update successful', data: productService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function deleteProduct(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { id } = req.params;
            const productService = yield productService_1.ProductService.deleteProduct(id);
            if (productService) {
                res.status(200).json({ message: 'Delete successful', data: productService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
function getProductAll(req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const productService = yield productService_1.ProductService.getProductAll();
            if (productService) {
                res.status(200).json({ message: 'Find successful', data: productService, status: "success", statusCode: 200 });
            }
            else {
                res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
            }
        }
        catch (error) {
            res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
        }
    });
}
// ✅ Answer (Astrologer updates)
// export const answerQuestionAstro = async (req: Request, res: Response) => {
//     try {
//         const { answer, astrologerId } = req.body;
//         const updated = await ProductService.answerQuestionAstro(req.params.id, answer, astrologerId);
//         if (!updated) {
//             return res.status(404).json({ success: false, message: "Question not found" });
//         }
//         return res.json({ success: true, data: updated });
//     } catch (err: any) {
//         return res.status(500).json({ success: false, message: err.message });
//     }
// };
