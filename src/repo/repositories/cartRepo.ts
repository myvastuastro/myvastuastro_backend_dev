
import { Types } from 'mongoose';
import Cart from '../../models/store/AstrologyCart';
import { ICart } from '../../models/store/AstrologyCart';

export class CartRepository {
    static async createCart(userId: any): Promise<any> {
        return await Cart.create({ userId, items: [] });

    }

    static async getCartByUser(userId: string): Promise<any | null> {
        return await Cart.findOne({ userId: new Types.ObjectId(userId) })
            .populate("items.parentId")
            .populate("items.productId");

    }


    static async updateCart(userId: string, items: ICart["items"]): Promise<any> {
        return await Cart.findOneAndUpdate(
            { userId: new Types.ObjectId(userId) },
            { items },
            { new: true, upsert: true }
        )
            .populate("items.productId")
            .populate("items.parentId");

    }


    static async clearCart(userId: string) {
        return await Cart.findOneAndUpdate(
            { userId: new Types.ObjectId(userId) },
            { items: [] },
            { new: true }
        );
    }
}
