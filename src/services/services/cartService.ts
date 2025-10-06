
import { Types } from 'mongoose';
import { CartRepository } from '../../repo/repositories/cartRepo';

export class CartService {
    static async addCart(userId: string, productId: string, parentId: string, quantity = 1) {
        let cart = await CartRepository.getCartByUser(userId);
        if (!cart) cart = await CartRepository.createCart(userId);
        const existingItem = Array.isArray(cart?.items)
            ? cart.items.find(
                (item: any) =>
                    item.productId?._id.toString() === productId &&
                    item.parentId?._id.toString() === parentId
            )
            : undefined;

        console.log("existingItem", existingItem)
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.items.push({
                productId: new Types.ObjectId(productId),
                parentId: new Types.ObjectId(parentId),
                quantity,
            });
        }
        return await CartRepository.updateCart(userId, cart.items);
    }


    static async getCart(userId: string): Promise<any> {
        let cart = await CartRepository.getCartByUser(userId);

        if (!cart) {
            cart = await CartRepository.createCart(userId);
        }
        return cart;
    }


    static async removeCart(userId: string, productId: string, parentId: string) {
        const cart = await CartRepository.getCartByUser(userId);
        if (!cart) return null;

        cart.items = cart.items.filter(
            (item: any) =>
                !(item.productId?._id?.toString() === productId && item.parentId?._id?.toString() === parentId)
        );

        return await CartRepository.updateCart(userId, cart.items);
    }

    static async updateQuantity(
        userId: string,
        productId: string,
        parentId: string,
        action: "increase" | "decrease"
    ) {
        const cart = await CartRepository.getCartByUser(userId);
        if (!cart) return null;

        console.log("cart before update:", JSON.stringify(cart, null, 2));

        const itemIndex = cart.items.findIndex((item: any) => {
            const prodId =
                item.productId?._id?.toString() ?? item.productId?.toString();
            const parId =
                item.parentId?._id?.toString() ?? item.parentId?.toString();

            return prodId === productId && parId === parentId;
        });

        if (itemIndex === -1) {
            console.log("Item not found in cart");
            return cart;
        }

        const item = cart.items[itemIndex];

        if (action === "increase") {
            item.quantity += 1;
        } else if (action === "decrease") {
            if (item.quantity > 1) {
                item.quantity -= 1;
            } else {
                // quantity = 1 → user clicks decrease → remove item
                cart.items.splice(itemIndex, 1);
            }
        }

        const updatedCart = await cart.save();
        return await updatedCart.populate("items.productId items.parentId");
    }



    // static async updateQuantity(
    //     userId: string,
    //     productId: string,
    //     parentId: string,
    //     action: "increase" | "decrease" | "remove"
    // ) {
    //     const cart = await CartRepository.getCartByUser(userId);
    //     if (!cart) return null;

    //     console.log("cart before update:", JSON.stringify(cart, null, 2));

    //     // Safe comparison: works for ObjectId or populated object
    //     const item = cart.items.find((item: any) => {
    //         const prodId =
    //             item.productId?._id?.toString() ?? item.productId?.toString();
    //         const parId =
    //             item.parentId?._id?.toString() ?? item.parentId?.toString();

    //         return prodId === productId && parId === parentId;
    //     });

    //     if (!item) {
    //         console.log("Item not found in cart");
    //         return cart;
    //     }

    //     if (action === "increase") {
    //         item.quantity += 1;
    //     } else if (action === "decrease" && item.quantity > 1) {
    //         item.quantity -= 1;
    //     } 

    //     // Save cart back
    //     const updatedCart = await cart.save();

    //     // repopulate so response has product + parent details
    //     return await updatedCart.populate("items.productId items.parentId");
    // }


    static async clearCart(userId: string) {
        return await CartRepository.clearCart(userId);
    }


}