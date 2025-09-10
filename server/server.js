import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

// Contact API route
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;
 console.log("📩 Incoming data:", req.body);
  try {
    // Create transporter with Brevo SMTP
    let transporter = nodemailer.createTransport({
      host:'smtp-relay.brevo.com',
      port: 587,
      auth: {
        user: process.env.SMPT_USER, // Brevo email
        pass: process.env.SMPT_PASS, // Brevo SMTP key
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SENDER_EMAIL}>`,
      to: email,
      subject: `Welcome !... - ${name}`,
      text:'Your account has been created',
      html: `
        <h3>New Message from Portfolio Contact Form</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    res.status(200).json({ success: true, msg: "Message sent successfully!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ success: false, msg: "Error sending message." });
  }
});

// Start server
app.listen(5000, () => console.log("✅ Server running on port 5000"));
