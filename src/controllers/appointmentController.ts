import { Request, Response } from 'express';
import { AppointmentService } from '../services/appointmentService';
export async function createAppointment(req: Request, res: Response): Promise<void> {
    try {
        const appointment = await AppointmentService.createAppointment(req.body);
        
        if (appointment) {
            res.status(200).json({ message: 'Submit successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAppointment(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const appointment = await AppointmentService.getById(id);
        if (appointment) {
            res.status(200).json({ message: 'Find successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }

    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateAppointment(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
     
       
        const appointment = await AppointmentService.updateAppointment(id, req.body);
        if (appointment) {
            res.status(200).json({ message: 'Update successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }
    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteAppointment(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const appointment = await AppointmentService.deleteAppointment(id);
        if (appointment) {
            res.status(200).json({ message: 'Delete successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }
    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllAppointments(req: Request, res: Response): Promise<void> {
    try {
        const appointment = await AppointmentService.getAll();
        if (appointment) {
            res.status(200).json({ message: 'Find successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }
    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
    }
}

