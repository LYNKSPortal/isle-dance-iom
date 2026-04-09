# SMTP Email Configuration

This document explains the email functionality setup for Isle Dance website.

## Overview

All forms on the website now send email notifications to `info@isledance.im` when submitted:
- **Contact Form** - Sends contact inquiries
- **Workshop Registration** - Sends workshop registration details
- **Shop Orders** - Sends order details before redirecting to payment

## Configuration

Email credentials are stored in `.env.local` file (never committed to git):

```
SMTP_HOST=smtp.isledance.im
SMTP_PORT=465
SMTP_USER=info@isledance.im
SMTP_PASS=IsleDa!98763428
SMTP_FROM=info@isledance.im
SMTP_TO=info@isledance.im
```

## API Routes

Three API routes handle email sending:

1. **`/api/contact`** - Contact form submissions
2. **`/api/workshop`** - Workshop registrations  
3. **`/api/shop`** - Shop orders

## How It Works

### Contact Form (`/contact`)
1. User fills out contact form
2. Form submits to `/api/contact`
3. Email sent to `info@isledance.im`
4. Success/error message shown to user

### Workshop Registration (`/workshops`)
1. User fills out registration form
2. Form submits to `/api/workshop`
3. Email sent with registration details
4. User redirected to SumUp payment page

### Shop Orders (`/shop`)
1. User fills out product order form
2. Form submits to `/api/shop`
3. Email sent with order details
4. User redirected to appropriate SumUp payment link based on product/size

## Security Notes

⚠️ **IMPORTANT**: 
- The `.env.local` file contains sensitive credentials
- This file is gitignored and should NEVER be committed
- Change the password immediately after initial setup
- Consider using environment variables in production deployment

## Testing

To test email functionality:
1. Start the development server: `npm run dev`
2. Navigate to any form (contact, workshops, shop)
3. Fill out and submit the form
4. Check `info@isledance.im` inbox for the email

## Troubleshooting

If emails are not sending:
1. Check `.env.local` file exists and has correct credentials
2. Verify SMTP server is accessible
3. Check browser console for errors
4. Review server logs for API route errors
5. Ensure nodemailer package is installed: `npm install nodemailer`

## Dependencies

- `nodemailer` - Email sending library
- `@types/nodemailer` - TypeScript types for nodemailer
