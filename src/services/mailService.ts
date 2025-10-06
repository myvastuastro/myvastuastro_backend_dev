import { sendMailRepo } from '../repo/mailRepository';

export const sendMailService = async ({ to, subject, text, html }: any) => {
  const mailOptions = {
    from: `"MyVastuAstro 👋" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
    html,
  };
  return await sendMailRepo(mailOptions);
};