
import { Orders } from 'razorpay/dist/types/orders';
import { CartRepository } from '../../repo/repositories/cartRepo';
import { OrderRepository } from '../../repo/repositories/orderRepo';

export class OrderService {

  static async checkout(
  userId: string,
  addressId: string,
  paymentMethod: "COD" | "ONLINE"
) {
  // Get cart
  const cart = await CartRepository.getCartByUser(userId);
  if (!cart || cart.items.length === 0) {
    throw new Error("Cart is empty");
  }

  // Calculate total using discountPrice if valid
  const totalAmount = cart.items.reduce((acc: number, item: any) => {
    const price =
      item.productId?.discountPrice && item.productId.discountPrice > 0
        ? item.productId.discountPrice
        : item.productId?.price || 0;
    return acc + item.quantity * price;
  }, 0);

  // Create order
  const order = await OrderRepository.createOrder({
    userId,
    items: cart.items.map((item: any) => {
      const price =
        item.productId?.discountPrice && item.productId.discountPrice > 0
          ? item.productId.discountPrice
          : item.productId.price || 0;

      return {
        productId: item.productId._id,
        parentId: item.parentId._id,
        quantity: item.quantity,
        price
      };
    }),
    totalAmount,
    addressId,
    paymentMethod,
    status: paymentMethod === "COD" ? "pending" : "paid"
  });

  // Clear cart
  await CartRepository.updateCart(userId, []);

  return order;
}

  // static async checkout(userId: string, addressId: string, paymentMethod: "COD" | "ONLINE") {
  //   // Get cart
  //   const cart = await CartRepository.getCartByUser(userId);
  //   if (!cart || cart.items.length === 0) {
  //     throw new Error("Cart is empty");
  //   }

  //   // Calculate total
  //    const totalAmount = cart.items.reduce(
  //   (acc: number, item: any) => {
  //     const price = item.productId?.discountPrice || item.productId?.price || 0;
  //     return acc + item.quantity * price;
  //   },
  //   0
  // );

  //   // Create order
  //   const order = await OrderRepository.createOrder({
  //     userId,
  //     items: cart.items.map((item: any) => ({
  //       productId: item.productId._id,
  //       parentId: item.parentId._id,
  //       quantity: item.quantity,
  //       price: item.productId?.discountPrice || item.productId.price || 0
  //     })),
  //     totalAmount,
  //     addressId,
  //     paymentMethod,
  //     status: paymentMethod === "COD" ? "pending" : "paid"
  //   });

  //   await CartRepository.updateCart(userId, []);

  //   return order;
  // }

  static async getUserOrdersService(userId: string) {
    return await OrderRepository.getOrdersByUser(userId);
  }

  static async getOrderByIdService(orderId: string) {
    return await OrderRepository.getOrderById(orderId);
  }

  static async updateOrderStatusService(orderId: string, status: string) {
    return await OrderRepository.updateStatus(orderId, status);
  }



}
