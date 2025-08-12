import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      name,
      mobile,
      address,
      purpose,
      email,
      subject,
      message,
      formType,
    } = body;

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${formType} Form" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_RECEIVER,
      replyTo: email || process.env.MAIL_USER,
      subject:
        formType === "appointment"
          ? "New Appointment Request"
          : "New Contact Message",
      html: `
        <h2>${
          formType === "appointment"
            ? "Appointment Request"
            : "Contact Form Submission"
        }</h2>
        <p><strong>Name:</strong> ${name || "N/A"}</p>
        ${mobile ? `<p><strong>Mobile:</strong> ${mobile}</p>` : ""}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
        ${address ? `<p><strong>Address:</strong> ${address}</p>` : ""}
        ${purpose ? `<p><strong>Purpose:</strong> ${purpose}</p>` : ""}
        ${subject ? `<p><strong>Subject:</strong> ${subject}</p>` : ""}
        ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
