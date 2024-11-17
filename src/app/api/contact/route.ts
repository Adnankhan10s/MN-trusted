import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer"

type ContactFormData = {
  username: string;
  email: string;
  phone: string;
  country: string;
  category: string;
  message: string;
};


export async function POST (request:NextRequest , response :NextResponse){
try {
  const body = (await request.json()) as ContactFormData;
  if (!body.username || !body.email || !body.phone || !body.country || !body.category || !body.message) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: body.email,
      to: "mntrusted@gmail.com",
      subject: `New Contact Form Submission from ${body.username}`,
      text: `
        Username: ${body.username}
        Email: ${body.email}
        Phone: ${body.phone}
        Country: ${body.country}
        Category: ${body.category}
        Message: ${body.message}
      `,
    };
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  
  }
  
 catch (error) {
  console.error("Error sending email:", error);
  return NextResponse.json({ message: "Error sending email" }, { status: 500 });
}

}






// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === "POST") {
//     const { username, email, phone, country, category, message } = req.body;

//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.GMAIL_USER, // replace with your email
//         pass: process.env.GMAIL_PASS, // replace with your email password
//       },
//     });

//     const mailOptions = {
//       from: email,
//       to: "mntrusted@gmail.com", // replace with the admin email
//       subject: `New Contact Form Submission from ${username}`,
//       text: `
//         Username: ${username}
//         Email: ${email}
//         Phone: ${phone}
//         Country: ${country}
//         Category: ${category}
//         Message: ${message}
//       `,
//     };

//     try {
//       await transporter.sendMail(mailOptions);
//       return res.status(200).json({ message: "Email sent successfully" });
//     } catch (error) {
//       console.error(error);
//       return res.status(500).json({ message: "Error sending email" });
//     }
//   } else {
//     return res.status(405).json({ message: "Method not allowed" });
//   }
// }
