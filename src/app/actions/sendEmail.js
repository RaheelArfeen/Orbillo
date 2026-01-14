"use server"

import nodemailer from 'nodemailer';

export async function sendEmail(formData) {
    try {
        const { user_name, user_email, user_whatsapp, company_name, selected_service, message } = formData;

        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: parseInt(process.env.SMTP_PORT) || 587,
            secure: false,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        await transporter.verify();

        const currentYear = new Date().getFullYear();
        const brandColor = "#C9FF90";
        const darkBg = "#062B28";

        const adminMailOptions = {
            from: `"Orbillo Web" <${process.env.SMTP_USER}>`,
            to: 'hello@orbillo.com',
            replyTo: user_email,
            subject: `🚀 New Lead: ${selected_service} | ${user_name}`,
            html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0; padding:20px; background-color:#F4F7F6; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; background-color: ${darkBg}; border-radius: 24px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1);">
                    <tr>
                        <td style="padding: 40px 40px 20px 40px;">
                            <h2 style="color: ${brandColor}; font-size: 14px; text-transform: uppercase; letter-spacing: 2px; margin: 0;">New Project Inquiry</h2>
                            <h1 style="color: #FFFFFF; font-size: 28px; margin: 10px 0 0 0;">${selected_service}</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px 40px;">
                            <table width="100%" style="background-color: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1);">
                                <tr>
                                    <td style="padding: 24px;">
                                        <p style="color: ${brandColor}; font-size: 11px; font-weight: 700; text-transform: uppercase; margin: 0 0 4px 0;">Client Details</p>
                                        <p style="color: #FFFFFF; font-size: 18px; margin: 0 0 16px 0;"><strong>${user_name}</strong> from ${company_name}</p>
                                        
                                        <p style="color: ${brandColor}; font-size: 11px; font-weight: 700; text-transform: uppercase; margin: 0 0 4px 0;">Contact Info</p>
                                        <p style="color: #FFFFFF; font-size: 15px; margin: 0;">📧 ${user_email}</p>
                                        <p style="color: #FFFFFF; font-size: 15px; margin: 4px 0 16px 0;">💬 ${user_whatsapp}</p>

                                        <p style="color: ${brandColor}; font-size: 11px; font-weight: 700; text-transform: uppercase; margin: 0 0 4px 0;">Message</p>
                                        <p style="color: #FFFFFF; font-size: 15px; line-height: 1.6; margin: 0; opacity: 0.8; font-style: italic;">"${message}"</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 0 40px 40px 40px; text-align: center;">
                            <a href="mailto:${user_email}" style="display: inline-block; background-color: ${brandColor}; color: ${darkBg}; padding: 14px 28px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 15px;">Reply to Lead</a>
                        </td>
                    </tr>
                </table>
            </body>
            </html>`
        };

        const clientMailOptions = {
            from: `"Orbillo Agency" <${process.env.SMTP_USER}>`,
            to: user_email,
            subject: 'We’ve received your message! - Orbillo Agency',
            html: `
            <!DOCTYPE html>
            <html>
            <body style="margin:0; padding:0; background-color:#FFFFFF; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
                <table align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px; margin-top: 40px;">
                    <tr>
                        <td style="padding: 0 20px;">
                            <h1 style="color: ${darkBg}; font-size: 32px; letter-spacing: -1px; margin-bottom: 20px;">Hi ${user_name},</h1>
                            <p style="color: #4A4A4A; font-size: 18px; line-height: 1.6; margin-bottom: 30px;">
                                Thanks for reaching out! We’ve received your request for <strong>${selected_service}</strong> and our team is already looking over the details.
                            </p>
                            
                            <div style="background-color: #F8FFF0; border-radius: 20px; padding: 30px; border: 1px solid #E2F5D1;">
                                <h3 style="color: ${darkBg}; margin-top: 0; font-size: 18px;">What happens next?</h3>
                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                    <tr>
                                        <td width="28" style="vertical-align: top; padding-top: 5px;"><span style="color: ${darkBg}; font-weight: bold;">01</span></td>
                                        <td style="padding-bottom: 15px; color: #4A4A4A;">We review your project goals and requirements.</td>
                                    </tr>
                                    <tr>
                                        <td width="28" style="vertical-align: top; padding-top: 5px;"><span style="color: ${darkBg}; font-weight: bold;">02</span></td>
                                        <td style="padding-bottom: 15px; color: #4A4A4A;">A team member will reach out via email or WhatsApp within 24 hours.</td>
                                    </tr>
                                    <tr>
                                        <td width="28" style="vertical-align: top; padding-top: 5px;"><span style="color: ${darkBg}; font-weight: bold;">03</span></td>
                                        <td style="color: #4A4A4A;">We’ll schedule a brief discovery call to discuss the timeline.</td>
                                    </tr>
                                </table>
                            </div>

                            <p style="color: #4A4A4A; font-size: 16px; margin-top: 40px;">
                                In the meantime, feel free to check out our latest work on 
                                <a href="https://www.behance.net/teamorbillo" style="color: ${darkBg}; font-weight: bold; text-decoration: underline;">Behance</a>.
                            </p>
                            
                            <hr style="border: 0; border-top: 1px solid #EEEEEE; margin: 40px 0;" />
                            
                            <table width="100%">
                                <tr>
                                    <td>
                                        <p style="color: ${darkBg}; font-weight: bold; margin: 0;">Team Orbillo</p>
                                        <p style="color: #999999; font-size: 13px; margin: 4px 0 0 0;">Digital Design & Development Agency</p>
                                    </td>
                                    <td style="text-align: right;">
                                        <p style="color: #999999; font-size: 12px; margin: 0;">© ${currentYear} Orbillo</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                    <tr><td style="height: 60px;"></td></tr>
                </table>
            </body>
            </html>`
        };

        await Promise.all([
            transporter.sendMail(adminMailOptions),
            transporter.sendMail(clientMailOptions)
        ]);

        return { success: true };
    } catch (error) {
        console.error("Nodemailer Error:", error);
        return { success: false, error: error.message };
    }
}