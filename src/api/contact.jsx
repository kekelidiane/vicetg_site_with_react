import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();
    const { nom, prenom, email, objet, message } = body;

    // Transporteur SMTP Gmail
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER, // adresse Gmail
        pass: process.env.MAIL_PASS, // mot de passe Gmail
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER, // où je veux recevoir le mail
      subject: objet || "Nouveau message de VICE TOGO",
      text: `
        Nom : ${nom} ${prenom}
        Email : ${email}

        Message :
        ${message}
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error("Erreur envoi mail:", error);
    return new Response(JSON.stringify({ success: false, error }), { status: 500 });
  }
}
