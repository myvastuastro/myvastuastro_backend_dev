import { sendMailService } from '../services/mailService.js';

export const sendMailController = async (req: any, res: any) => {
  const { to, subject, text, html } = req.body;

  try {
    const info = await sendMailService({ to, subject, text, html });
    res.status(200).json({ message: 'Email sent!', info });
  } catch (err) {
    res.status(500).json({ error: 'Email failed to send', detail: err });
  }
};
