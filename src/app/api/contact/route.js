import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with your API Key
const resend = new Resend('re_BegyNtMd_xJ1ZfoxC4Ku2k8zp7RsApfG5');

export async function POST(req) {
    try {
        const { user_name, user_email, user_whatsapp, company_name, service, message } = await req.json();

        await resend.emails.send({
            from: 'Orbillo Web <onboarding@resend.dev>',
            to: 'hello@orbillo.com',
            reply_to: user_email,
            subject: `🚀 New Lead: ${service}`,
            html: `
               <div style="background-color: #f8fafc; padding: 40px; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
                    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                        <div style="background-color: #1e293b; padding: 25px; text-align: center;">
                            <span style="color: #ffffff; font-size: 18px; font-weight: bold; letter-spacing: 2px;">ORBILLO INQUIRY</span>
                        </div>
                        <div style="padding: 40px; color: #334155;">
                            <h2 style="font-size: 20px; color: #0f172a; margin-top: 0; border-bottom: 2px solid #3b82f6; display: inline-block; padding-bottom: 4px;">Contact Details</h2>
                            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-size: 14px; width: 140px;">Client Name</td>
                                    <td style="padding: 10px 0; color: #1e293b; font-weight: 600;">${user_name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Company</td>
                                    <td style="padding: 10px 0; color: #1e293b; font-weight: 600;">${company_name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-size: 14px;">WhatsApp</td>
                                    <td style="padding: 10px 0;"><a href="https://wa.me/${user_whatsapp.replace(/\D/g, '')}" style="color: #10b981; text-decoration: none; font-weight: 600;">${user_whatsapp}</a></td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; color: #64748b; font-size: 14px;">Email Address</td>
                                    <td style="padding: 10px 0;"><a href="mailto:${user_email}" style="color: #3b82f6; text-decoration: none;">${user_email}</a></td>
                                </tr>
                            </table>

                            <h2 style="font-size: 20px; color: #0f172a; margin-top: 35px; border-bottom: 2px solid #3b82f6; display: inline-block; padding-bottom: 4px;">Project Scope</h2>
                            <div style="margin-top: 15px;">
                                <p style="font-size: 15px; margin: 0;"><strong>Selected Service:</strong> ${service}</p>
                                <div style="margin-top: 15px; background-color: #f1f5f9; padding: 20px; border-radius: 8px; color: #475569; line-height: 1.6; border-left: 4px solid #cbd5e1;">
                                    ${message}
                                </div>
                            </div>
                            
                            <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #e2e8f0; text-align: center; font-size: 12px; color: #94a3b8;">
                                Received via orbillo.com portal
                            </div>
                        </div>
                    </div>
                </div>
            `,
        });

        // 2. Confirmation Email (To Client)
        await resend.emails.send({
            from: 'Team Orbillo <onboarding@resend.dev>',
            to: user_email,
            subject: `We've received your request!`,
            html: `
                <div style="background-color: #ffffff; padding: 40px; font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; color: #333333; line-height: 1.6;">
                    <p style="font-size: 16px;">Hello ${user_name},</p>
                    <p>Thank you for reaching out to <strong>Orbillo</strong>. This email confirms that we have received your project inquiry regarding <strong>${service}</strong> for ${company_name}.</p>
                    <p>Our creative team is currently reviewing your message. One of our project managers will contact you via email or WhatsApp within 24 hours to discuss the next steps.</p>
                    
                    <div style="margin: 30px 0; padding: 20px; background-color: #f8fafc; border-radius: 4px; border-left: 2px solid #333333;">
                        <p style="margin: 0; font-style: italic;">"We look forward to the possibility of collaborating with you to bring your vision to life."</p>
                    </div>

                    <p style="margin-bottom: 0;">Best regards,</p>
                    <p style="margin-top: 5px;"><strong>Team Orbillo</strong><br/>Digital Design Agency</p>
                    
                    <hr style="border: none; border-top: 1px solid #eeeeee; margin: 40px 0 20px 0;" />
                    <p style="font-size: 11px; color: #999999; text-align: center;">
                        orbillo.com | Dinajpur, Bangladesh
                    </p>
                </div>
            `,
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Email Error:", error);
        return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 });
    }
}