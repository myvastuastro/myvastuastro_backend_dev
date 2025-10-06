
import { Types } from 'mongoose';
import AstrologyOrder from '../../models/store/AstrologyOrder';
import Order from '../../models/store/AstrologyOrder';

export class OrderRepository {
  static async createOrder(data: any): Promise<any> {
    const order = new Order(data);
    return order.save(); 
  }

  static async getOrdersByUser(userId: string): Promise<any | null> {
    const orders = await AstrologyOrder.find({ userId: new Types.ObjectId(userId) })
      .populate("items.productId")
      .populate("items.parentId")
      .populate("addressId")
      .sort({ createdAt: -1 })
      .lean();

      return orders.map(order => ({
      ...order,
      items: order.items.map(item => ({
        productId: { ...item.productId },
        parentId: { ...item.parentId },
        quantity: item.quantity,
        price: item.price
      }))
    }));
  }

  static async getOrderById(orderId: string): Promise<any | null> {
    const order = await AstrologyOrder.findById(new Types.ObjectId(orderId))
      .populate("items.productId")
      .populate("items.parentId")
      .populate("addressId")
      .lean();

    if (!order) return null;

    return {
      ...order,
      items: order.items.map(item => ({
        productId: { ...item.productId },
        parentId: { ...item.parentId },
        quantity: item.quantity,
        price: item.price
      }))
    };
  }

  static async updateStatus(orderId: string, status: string): Promise<any> {
       return await Order.findByIdAndUpdate(orderId, { status }, { new: true });
  }
}
