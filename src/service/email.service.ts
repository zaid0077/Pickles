import nodemailer from 'nodemailer'
import { emailTemplate } from '../emailTemplate'
import log from '../logger';


// interface Email {
//     email: String,
//     subject: String,
//     body: String
// }

// There are two ways, either we can use an interface, or we can destructure the object and pass the types

export async function sendEmail({ emailId, subject, body }: {
    emailId: string,
    subject: string,
    body: string
}) {
    let testAccount = nodemailer.createTestAccount()  // Creating test account here. Can be replaced with Amazon Ses, Sendgrid or any other service

    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: (await testAccount).user,
            pass: (await testAccount).pass,
        },
    });

    let info = await transporter.sendMail({
        from: 'admin@admin.com', // sender address
        to: emailId, // list of receivers
        subject: subject, // Subject line
        // html: emailTemplate(body) // One option is we create a html template and pass the parameters
        html: `<br>${body}</br>`
    })

    log.info("Message sent: %s", JSON.stringify(info));

   log.info("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return nodemailer.getTestMessageUrl(info)

}