import { AppointmentImportantCallRepository } from '../repo/appointmentImportantCallRepository';

export class AppointmentImportantCallService {
    static async createAppointment(data: any): Promise<any> {
        try {
            const create = await AppointmentImportantCallRepository.createAppointment(data);
            return create;


        } catch (error) {
            throw new Error('Could not create quote');
        }
    }


    static async getById(id: string): Promise<any> {
        try {
            return await AppointmentImportantCallRepository.getAppointmentById(id);
        } catch (error) {
            throw new Error('Could not get contact');
        }
    }

    static async updateAppointment(id: string, data: any): Promise<any> {
        try {
            return await AppointmentImportantCallRepository.updateAppointment(id, data);
        } catch (error) {
            throw new Error('Could not update contact');
        }
    }

    static async deleteAppointment(id: string): Promise<any> {
        try {
            return await AppointmentImportantCallRepository.deleteAppointment(id);
        } catch (error) {
            throw new Error('Could not delete contact');
        }
    }

    static async getAll(): Promise<any> {
        try {
            return await AppointmentImportantCallRepository.getAllAppointments();
        } catch (error) {
            throw new Error('Could not get contacts');
        }
    }



}
