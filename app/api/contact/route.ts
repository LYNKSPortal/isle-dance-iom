import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, message } = body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || '465'),
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email to admin
    const adminMailOptions = {
      from: process.env.SMTP_FROM,
      replyTo: email,
      to: process.env.SMTP_TO,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Email to customer
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      replyTo: process.env.SMTP_FROM,
      to: email,
      subject: 'We Received Your Message - Isle Dance',
      html: `
        <h2>Thank You for Contacting Us!</h2>
        <p>Dear ${name},</p>
        <p>We've received your message and will get back to you as soon as possible, usually within 24 hours.</p>
        <hr>
        <h3>Your Message:</h3>
        <p>${message}</p>
        <hr>
        <p>If you need immediate assistance, please WhatsApp us at +44 7624 311022.</p>
        <br>
        <p>Best regards,<br>Isle Dance Team</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
