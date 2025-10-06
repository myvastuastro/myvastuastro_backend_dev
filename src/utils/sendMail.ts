import nodemailer from 'nodemailer';

export const sendMailJob = async ({ to, subject, html }: { to: string; subject: string; html: string }) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,       // Must be set in your env or serverless.yml
      pass: process.env.EMAIL_PASS,       // App password, not Gmail account password
    },
  });

  await transporter.sendMail({
    from: `"MyVastuAstro" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
};
