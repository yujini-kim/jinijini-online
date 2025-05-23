import nodemailer from "nodemailer";

const email = process.env.EAMIL;
const pass = process.env.EMAIL_PASS;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    password: pass,
  },
});

export const mailOPrions = {
  from: email,
  to: email,
};
