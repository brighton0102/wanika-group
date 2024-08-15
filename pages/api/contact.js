import nodemailer from "nodemailer"

export default async function ContactApi(req, res) {
    const { name, email, message } = req.body;

    const user = process.env.EMAIL;

    const data = {
        name, email, message
    }

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: user,
            pass: process.env.PASSWORD,
        },
    });

    try {
        const mail = await transporter.sendMail({
            from: user,
            to: "mtandibrighton76@gmail.com",
            replyTo: email,
            subject: `Contact form submission from ${name}`,
            html: `
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Message: ${message}</p>
            `,
        });

        console.log("Message sent:", mail.messageId);

        return res.status(200).json({ message: "success"})
        
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Could not send the email. Your message was not sent."})
    }

    
}