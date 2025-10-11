// repositories/contactRepository.ts

import AppointmentImportantCall from '../models/appointmentImportantCallModel';

export class AppointmentImportantCallRepository {
    static async createAppointment(data: any): Promise<any> {
        try {
            const {
              userId,
              vastuAstrologerId,
              name,
              email,
              mobile,
              message,
              appointment,
              } = data;
        
              const parsedAvailability = typeof appointment === 'string'
                ? JSON.parse(appointment)
                : appointment;
        
              const newAppointment = await AppointmentImportantCall.create({
                userId,
                vastuAstrologerId,
                name,
                email,
                mobile,
                message,
                appointment: parsedAvailability,
              });
            return newAppointment;

        } catch (error) {
            console.error('Error creating vastu astrogler:', error);
            throw error;
        }
    }

    static async getAppointmentById(id: string): Promise<any | null> {
        return await AppointmentImportantCall.findById(id);
    }

    static async updateAppointment(id: string, data: any): Promise<any> {
        try {
          if (data.appointment && typeof data.appointment === 'string') {
            data.appointment = JSON.parse(data.appointment);
          }
         
          return await AppointmentImportantCall.findByIdAndUpdate(
            id,
            { $set: { ...data } },
            { new: true }
          );
        } catch (error) {
          console.error('Error updating vastu Appointment:', error);
          throw error;
        }
      }

    static async deleteAppointment(id: string): Promise<any> {
        return await AppointmentImportantCall.deleteOne({ _id: id });
    }

    static async getAllAppointments(): Promise<any[]> {
        return await AppointmentImportantCall.find();
    }
}
