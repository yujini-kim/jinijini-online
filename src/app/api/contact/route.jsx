import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message",
};

const EmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => str + `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}\n\n`,
    "",
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) =>
      str + `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`,
    "",
  );

  return {
    text: stringData,
    html: htmlData,
  };
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

const mailOptions = {
  from: process.env.EMAIL_USER,
  to: process.env.EMAIL_TO,
};

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json();
    console.log({ name, email, subject, message });

    const { text, html } = EmailContent({ name, email, subject, message });

    await transporter.sendMail({
      ...mailOptions,
      subject,
      text,
      html,
    });

    return NextResponse.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}
