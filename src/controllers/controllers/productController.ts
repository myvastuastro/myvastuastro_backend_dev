import { Request, Response } from 'express';
import { ProductService } from '../../services/services/productService';
export async function createProduct(req: Request, res: Response): Promise<void> {
    try {
        const data = {
            ...req.body,
            file: req.file, // 👈 multer puts the uploaded file here
        };
        const productService = await ProductService.createProduct(data);
        if (productService) {
            res.status(200).json({ message: 'Submit successful', data: productService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getProductById(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const productService = await ProductService.getProductById(id);
        if (productService) {
            res.status(200).json({ message: 'Find successful', data: productService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function getProductByUserId(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const productService = await ProductService.getProductByUserId(userId);
        if (productService) {
            res.status(200).json({ message: 'Find successful', data: productService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateProduct(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const productService = await ProductService.updateProduct(id, req.body);
        if (productService) {
            res.status(200).json({ message: 'Update successful', data: productService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }

}

export async function deleteProduct(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const productService = await ProductService.deleteProduct(id);
        if (productService) {
            res.status(200).json({ message: 'Delete successful', data: productService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getProductAll(req: Request, res: Response): Promise<void> {
    try {
        const productService = await ProductService.getProductAll();
        if (productService) {
            res.status(200).json({ message: 'Find successful', data: productService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: productService });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
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

