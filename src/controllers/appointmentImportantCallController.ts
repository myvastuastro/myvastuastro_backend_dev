import { Request, Response } from 'express';
import { AppointmentImportantCallService } from '../services/appointmentImportantCallService';
export async function createAppointmentImportantCall(req: Request, res: Response): Promise<void> {
    try {
        const appointment = await AppointmentImportantCallService.createAppointment(req.body);
        
        if (appointment) {
            res.status(200).json({ message: 'Submit successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }

    } catch (error) {
        res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAppointmentImportantCall(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const appointment = await AppointmentImportantCallService.getById(id);
        if (appointment) {
            res.status(200).json({ message: 'Find successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }

    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });

    }
}

export async function updateAppointmentImportantCall(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
     
       
        const appointment = await AppointmentImportantCallService.updateAppointment(id, req.body);
        if (appointment) {
            res.status(200).json({ message: 'Update successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }
    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
    }
   
}

export async function deleteAppointmentImportantCall(req: Request, res: Response): Promise<void> {
    try {
        const { id } = req.params;
        const appointment = await AppointmentImportantCallService.deleteAppointment(id);
        if (appointment) {
            res.status(200).json({ message: 'Delete successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }
    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
    }
}

export async function getAllAppointmentsImportantCall(req: Request, res: Response): Promise<void> {
    try {
        const appointment = await AppointmentImportantCallService.getAll();
        if (appointment) {
            res.status(200).json({ message: 'Find successful', data: appointment, status: "success", statusCode: 200 });
        } else {
            res.status(400).json({ message: 'Failed', status: "fail", statusCode: 400, data: appointment });
        }
    } catch (error) {
        res.status(400).json({ message: 'Appointment not found', status: "fail", statusCode: 400, data: error });
    }
}

