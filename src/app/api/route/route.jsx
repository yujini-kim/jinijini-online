import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const CONTACT_MESSAGE_FIELDS = {
  name: "Name",
  email: "Email",
  subject: "Subject",
  message: "Message"
};

const EmailContent = (data) => {
  const stringData = Object.entries(data).reduce(
    (str, [key, val]) => str + `${CONTACT_MESSAGE_FIELDS[key]}: \n${val}\n\n`,
    ""
  );

  const htmlData = Object.entries(data).reduce(
    (str, [key, val]) => str + `<h1>${CONTACT_MESSAGE_FIELDS[key]}</h1><p>${val}</p>`,
    ""
  );

  return {
    text: stringData,
    html: htmlData,
  };
};

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kingyujin56@gmail.com',
    pass: 'irmd xbzt hyqb nysp',
  },
});

// 받는 사람 등 기본 메일 옵션
const mailOptions = {
  from: 'kingyujin56@gmail.com', 
  to: '97o912@naver.com',        
};

export async function POST(request) {
  try {
    // 1) 폼 데이터 파싱
    const { name, email, subject, message } = await request.json();
    console.log({ name, email, subject, message });

    // 2) 본문 생성
    const { text, html } = EmailContent({ name, email, subject, message });

    // 3) nodemailer로 메일 전송
    await transporter.sendMail({
      ...mailOptions,
      subject,     // 사용자가 입력한 제목
      text,        // 폼 데이터를 text 형태로
      html,        // 폼 데이터를 html 형태로
    });

    // 메일 전송 성공 시
    return NextResponse.json({ message: 'Form submitted successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
}