import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { username, email, phone, country, category, message } = req.body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // replace with your email
        pass: process.env.GMAIL_PASS, // replace with your email password
      },
    });

    const mailOptions = {
      from: email,
      to: "mntrusted@gmail.com", // replace with the admin email
      subject: `New Contact Form Submission from ${username}`,
      text: `
        Username: ${username}
        Email: ${email}
        Phone: ${phone}
        Country: ${country}
        Category: ${category}
        Message: ${message}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error sending email" });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed" });
  }
}
