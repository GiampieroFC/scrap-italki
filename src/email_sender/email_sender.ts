'use strict';
import { createTransport } from "nodemailer";
import { Envs, getEnv } from "../adapters/config/envs";

interface email_sender_props {
    subject: string;
    text: string;
    html?: string;
}

export async function email_sender({ subject, text, html }: email_sender_props) {

    let transporter = createTransport({
        // service: getEnv(Envs.TRANSPORT_SERVICE),
        // host: getEnv(Envs.TRANSPORT_HOST),
        // port: getEnv(Envs.TRANSPORT_PORT),
        // secure: getEnv(Envs.TRANSPORT_SECURE) === "true",
        auth: {
            user: getEnv(Envs.TRANSPORT_AUTH_USER),
            pass: getEnv(Envs.TRANSPORT_AUTH_PASS),
        },
    });


    let mailOptions = {
        from: getEnv(Envs.MAIL_OPTIONS_FROM),
        to: getEnv(Envs.MAIL_OPTIONS_TO),
        subject,
        text,
        html,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("Message sent:", { info });
};