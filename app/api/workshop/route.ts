import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { 
      dancerName, 
      dancerAge, 
      danceSchool, 
      medicalConditions, 
      parentName, 
      parentNumber, 
      parentEmail, 
      canSignOut,
      workshop 
    } = body;

    console.log('Workshop registration received:', { dancerName, parentEmail, workshop });

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
      replyTo: parentEmail,
      to: process.env.SMTP_TO,
      subject: `New Workshop Registration - ${dancerName}`,
      html: `
        <h2>New Workshop Registration</h2>
        <p><strong>Workshop:</strong> ${workshop}</p>
        <hr>
        <h3>Dancer Information</h3>
        <p><strong>Dancer Name:</strong> ${dancerName}</p>
        <p><strong>Dancer Age:</strong> ${dancerAge}</p>
        <p><strong>Dance School:</strong> ${danceSchool || 'N/A'}</p>
        <p><strong>Medical Conditions:</strong> ${medicalConditions || 'None'}</p>
        <hr>
        <h3>Parent/Guardian Information</h3>
        <p><strong>Name:</strong> ${parentName}</p>
        <p><strong>Phone:</strong> ${parentNumber}</p>
        <p><strong>Email:</strong> ${parentEmail}</p>
        <p><strong>Can sign out without parent/guardian:</strong> ${canSignOut}</p>
      `,
    };

    // Email to customer
    const customerMailOptions = {
      from: process.env.SMTP_FROM,
      replyTo: process.env.SMTP_FROM,
      to: parentEmail,
      subject: `Workshop Registration Confirmation - ${workshop}`,
      html: `
        <h2>Thank You for Registering!</h2>
        <p>Dear ${parentName},</p>
        <p>We've received your registration for <strong>${dancerName}</strong> for the following workshop:</p>
        <p><strong>${workshop}</strong></p>
        <hr>
        <h3>Registration Details</h3>
        <p><strong>Dancer Name:</strong> ${dancerName}</p>
        <p><strong>Dancer Age:</strong> ${dancerAge}</p>
        <p><strong>Dance School:</strong> ${danceSchool || 'N/A'}</p>
        <hr>
        <p><strong>Important:</strong> Your spot is not confirmed until payment has been made. We'll send you more details closer to the workshop date.</p>
        <p>If you have any questions, please contact us at info@isledance.im or WhatsApp +44 7624 311022.</p>
        <br>
        <p>Best regards,<br>Isle Dance Team</p>
      `,
    };

    await transporter.sendMail(adminMailOptions);
    console.log('Admin email sent successfully');
    
    await transporter.sendMail(customerMailOptions);
    console.log('Customer email sent successfully to:', parentEmail);

    return NextResponse.json({ success: true, message: 'Registration email sent successfully' });
  } catch (error) {
    console.error('Error sending workshop registration email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send registration email' },
      { status: 500 }
    );
  }
}
