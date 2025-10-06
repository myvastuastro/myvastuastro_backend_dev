import { Request, Response } from 'express';
import { CartService } from '../../services/services/cartService';
export async function addCart(req: Request, res: Response): Promise<void> {
    try {
        const { userId, productId, parentId, quantity } = req.body;
        console.log("Request Body:", req.body); // Debugging line
         const cart = await CartService.addCart(userId, productId, parentId, quantity);

        if (cart) {
            res.status(200).json({ message: 'Submit successful', data: cart, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getCart(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.params;
        const cartService = await CartService.getCart(userId);
        if (cartService) {
            res.status(200).json({ message: 'Find successful', data: cartService, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cartService });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function removeCart(req: Request, res: Response): Promise<void> {
    try {
        const { userId, productId, parentId } = req.body;

             const cart = await CartService.removeCart(userId, productId, parentId);

        if (cart) {
            res.status(200).json({ message: 'Remove successful', data: cart, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
        }

    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateQuantity(req: Request, res: Response): Promise<void> {
    try {
        const { userId, productId, parentId, action } = req.body;

        const cart = await CartService.updateQuantity(userId, productId, parentId, action);

        if (cart) {
            res.status(200).json({ message: 'Update successful', data: cart, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }

}



export async function clearCart(req: Request, res: Response): Promise<void> {
    try {
        const { userId } = req.body;
         const cart = await CartService.clearCart(userId);
        if (cart) {
            res.status(200).json({ message: 'Find successful', data: cart, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: cart });
        }
    } catch (error) {
        res.status(400).json({ message: 'AskQuestion not found', status: "fail", statusCode: 400, data: error });
    }
}
