const functions = require("firebase-functions");
const admin = require("firebase-admin");
const nodemailer = require("nodemailer");

admin.initializeApp();

// Configure the email transport using Nodemailer
// To use Gmail, you'll need an App Password if 2FA is enabled.
// Alternatively, use a service like SendGrid, Mailgun, etc.
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    // You should set these using Firebase environment config or Secret Manager:
    // firebase functions:config:set gmail.email="your_email@gmail.com" gmail.password="your_app_password"
    user: functions.config().gmail ? functions.config().gmail.email : "geatzgroupz@gmail.com",
    pass: functions.config().gmail ? functions.config().gmail.password : "your-app-password",
  },
});

/**
 * Triggered when a new document is added to the "contact_requests" collection.
 * Sends an email notification to the admin and a confirmation to the user.
 */
exports.sendContactNotification = functions.firestore
  .document("contact_requests/{docId}")
  .onCreate(async (snap, context) => {
    const data = snap.data();

    const mailOptionsAdmin = {
      from: "Geatz Groupz Bot <geatzgroupz@gmail.com>",
      to: "geatzgroupz@gmail.com", // Admin email
      subject: `New Lead: ${data.name} - ${data.subject || "No Subject"}`,
      html: `
        <h2>New Contact Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Subject:</strong> ${data.subject || "N/A"}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `,
    };

    const mailOptionsUser = {
      from: "Geatz Groupz <geatzgroupz@gmail.com>",
      to: data.email, // Sender's email
      subject: "We received your message!",
      html: `
        <h2>Hi ${data.name},</h2>
        <p>Thank you for reaching out to Geatz Groupz!</p>
        <p>We have received your message regarding "${data.subject || "your project"}" and one of our team members will get back to you shortly.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Geatz Groupz Team</strong></p>
      `,
    };

    try {
      // Send email to Admin
      await transporter.sendMail(mailOptionsAdmin);
      functions.logger.info("Admin notification sent successfully.");

      // Send confirmation to User
      await transporter.sendMail(mailOptionsUser);
      functions.logger.info("User confirmation sent successfully.");
      
      return null;
    } catch (error) {
      functions.logger.error("Error sending emails:", error);
      return null;
    }
  });
