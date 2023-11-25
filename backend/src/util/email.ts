import {createTransport} from 'nodemailer';
import env from "./validateEnv";

const transporter = createTransport({
    host: "smtp-relay.brevo.com",
    port: 587,
    auth: {
        user: "heyanantraj@gmail.com",
        pass: env.SMTP_PASSWORD
    }
});

export async function sendVerificationEmail(toEmail: string, verificationCode: string) {
    await transporter.sendMail({
        from: "heyanantraj@gmail.com",
        to: toEmail,
        subject: "Verify your email",
        html: `<h1>Verify your email</h1><br><p>Enter this code to verify your email: <strong>${verificationCode}</strong></p>`
    })
}