import nodemailer from 'nodemailer';
import { ContactRequest } from '@shared/schema';

// Email configuration
// Note: For production, you'll need to set up actual SMTP credentials 
// using environment variables for security
let emailConfig = {
  host: process.env.EMAIL_HOST || '',
  port: parseInt(process.env.EMAIL_PORT || '587'),
  secure: process.env.EMAIL_SECURE === 'true',
  auth: {
    user: process.env.EMAIL_USER || '',
    pass: process.env.EMAIL_PASSWORD || ''
  }
};

// The destination business email
const BUSINESS_EMAIL = 'abcfires6@gmail.com';

// Create a transporter for sending emails
let transporter: nodemailer.Transporter | null = null;

// Initialize the email transporter when credentials are available
export function initializeEmailTransporter() {
  if (emailConfig.auth.user && emailConfig.auth.pass) {
    transporter = nodemailer.createTransport(emailConfig);
    console.log('Email transporter initialized');
    return true;
  }
  console.log('Email credentials not available. Email notifications disabled.');
  return false;
}

// Format the contact request data into a readable email
function formatContactRequestEmail(contactRequest: ContactRequest): string {
  const { firstName, lastName, email, phone, serviceInterest, message, createdAt } = contactRequest;
  
  return `
    <h2>New Contact Request from ABC Fire Security Website</h2>
    <p><strong>Date:</strong> ${new Date(createdAt!).toLocaleString()}</p>
    <hr />
    <h3>Contact Information:</h3>
    <p><strong>Name:</strong> ${firstName} ${lastName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
    <hr />
    <h3>Request Details:</h3>
    <p><strong>Service Interest:</strong> ${serviceInterest || 'Not specified'}</p>
    <h3>Message:</h3>
    <p>${message}</p>
    <hr />
    <p>This is an automated email from your website contact form.</p>
  `;
}

// Send contact form email
export async function sendContactRequestEmail(contactRequest: ContactRequest): Promise<boolean> {
  if (!transporter) {
    console.log('Email transporter not initialized. Cannot send email.');
    return false;
  }

  try {
    const mailOptions = {
      from: emailConfig.auth.user,
      to: BUSINESS_EMAIL,
      subject: `New Contact Form Submission from ${contactRequest.firstName} ${contactRequest.lastName}`,
      html: formatContactRequestEmail(contactRequest)
    };

    await transporter.sendMail(mailOptions);
    console.log('Contact request email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending contact request email:', error);
    return false;
  }
}