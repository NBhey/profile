import { NextRequest, NextResponse } from 'next/server'
import * as nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const body = await req.json()
  const { name, email, text } = body

  if (!name || !email || !text) {
    return NextResponse.json(
      {
        message: 'Заполните все поля',
      },
      { status: 400 },
    )
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.NEXT_PUBLIC_SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.NEXT_PUBLIC_SMTP_USERNAME,
        pass: process.env.NEXT_PUBLIC_SMTP_PASSWORD,
      },
    })

    const mailOptions = {
      from: 'og.marckaryan@yandex.ru',
      to: 'og.marckaryan@yandex.ru',
      subject: `Письмо в портфолио`,
      text: `Имя: ${name} \nEmail: ${email} \nСообщение: ${text}`,
    }

    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 },
    )
  } catch (error) {
    console.log('Ошибка при отправки сообщения', error)
    return NextResponse.json(
      { message: 'Ошибка отправки сообщения' },
      {
        status: 500,
      },
    )
  }
}
