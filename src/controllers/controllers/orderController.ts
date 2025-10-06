import { Request, Response } from "express";
import {OrderService} from "../../services/services/orderService";

  export async function checkout(req: Request, res: Response) {
    try {
      const { userId, addressId, paymentMethod } = req.body;
      const order = await OrderService.checkout(userId, addressId, paymentMethod);
      res.status(201).json({
        message: "Order placed successfully",
        data: order,
        status: "success",
      });
    } catch (error: any) {
      res.status(400).json({ message: error.message, status: "error" });
    }
  }

  // export async function createOrder(req: Request, res: Response) {
  //   try {
  //     const order = await OrderService.createOrderService(req.body);
  //     res.status(201).json({ message: "Order placed successfully", data: order });
  //   } catch (error: any) {
  //     res.status(400).json({ message: error.message });
  //   }
  // }

   export async function getUserOrders(req: Request, res: Response) {
    try {
      const { userId } = req.params;
      const orders = await OrderService.getUserOrdersService(userId);
      res.json({ message: "Orders fetched successfully", data: orders });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  export async function getOrderById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const order = await OrderService.getOrderByIdService(id);
      res.json({ message: "Order fetched successfully", data: order });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

  export async function updateOrderStatus(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const { status } = req.body;
      const updatedOrder = await OrderService.updateOrderStatusService(id, status);
      res.json({ message: "Order status updated", data: updatedOrder });
    } catch (error: any) {
      res.status(400).json({ message: error.message });
    }
  }

