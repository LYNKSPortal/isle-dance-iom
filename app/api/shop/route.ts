import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      productType,
      size, 
      color, 
      fullName, 
      email, 
      phone, 
      questions 
    } = body;

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
      subject: `New Shop Order - ${productType} - ${fullName}`,
      html: `
        <h2>New Shop Order</h2>
        <p><strong>Product:</strong> ${productType}</p>
        <hr>
        <h3>Order Details</h3>
        <p><strong>Size:</strong> ${size}</p>
        ${color ? `<p><strong>Color:</strong> ${color}</p>` : ''}
        <hr>
        <h3>Customer Information</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        ${questions ? `<p><strong>Questions/Special Requests:</strong> ${questions}</p>` : ''}
        <hr>
        <p><em>Customer will proceed to SumUp payment after submitting this form.</em></p>
      `,
    };

    // Email to customer
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      replyTo: process.env.SMTP_FROM,
      to: email,
      subject: `Order Confirmation - ${productType}`,
      html: `
        <h2>Thank You for Your Order!</h2>
        <p>Dear ${fullName},</p>
        <p>We've received your order for:</p>
        <p><strong>${productType}</strong></p>
        <hr>
        <h3>Order Details</h3>
        <p><strong>Size:</strong> ${size}</p>
        ${color ? `<p><strong>Color:</strong> ${color}</p>` : ''}
        ${questions ? `<p><strong>Your Note:</strong> ${questions}</p>` : ''}
        <hr>
        <p><strong>Important:</strong> Your order is not confirmed until payment has been made. All items are made to order.</p>
        <p><strong>Collection:</strong> Orders must be collected from 15 Westbourne Drive, Douglas, IM1 4AY, Isle of Man.</p>
        <p>We'll notify you when your order is ready for collection.</p>
        <br>
        <p>If you have any questions, please contact us at info@isledance.im or WhatsApp +44 7624 311022.</p>
        <br>
        <p>Best regards,<br>Isle Dance Team</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(customerMailOptions);

    return NextResponse.json({ success: true, message: 'Order email sent successfully' });
  } catch (error) {
    console.error('Error sending shop order email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send order email' },
      { status: 500 }
    );
  }
}
