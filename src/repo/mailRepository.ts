import { transporter } from '../utils/transporter.js';

export const sendMailRepo = async (mailOptions: any) => {
  return await transporter.sendMail(mailOptions);
};