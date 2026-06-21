import nodemailer from 'nodemailer'
import { env } from '../config/env.js'

function hasSmtpConfig() {
  return Boolean(env.smtp.host && env.smtp.user && env.smtp.pass && env.smtp.from && env.contactEmail)
}

function createTransporter() {
  return nodemailer.createTransport({
    host: env.smtp.host,
    port: env.smtp.port,
    secure: env.smtp.secure,
    auth: {
      user: env.smtp.user,
      pass: env.smtp.pass,
    },
  })
}

function formatContactMessage(contactMessage) {
  return [
    'Nova mensagem recebida pelo site CVWFS.',
    '',
    `Nome: ${contactMessage.name}`,
    `Email: ${contactMessage.email}`,
    `Mensagem: ${contactMessage.message}`,
    '',
    `ID no banco: ${contactMessage.id}`,
    `Recebida em: ${contactMessage.createdAt.toISOString()}`,
  ].join('\n')
}

export async function sendContactEmail(contactMessage) {
  if (!hasSmtpConfig()) {
    const error = new Error('Envio de email nao configurado. Configure SMTP_HOST, SMTP_USER, SMTP_PASS e CONTACT_EMAIL.')
    error.statusCode = 503
    throw error
  }

  const transporter = createTransporter()

  await transporter.sendMail({
    from: env.smtp.from,
    to: env.contactEmail,
    replyTo: contactMessage.email,
    subject: `Nova mensagem de ${contactMessage.name} pelo site CVWFS`,
    text: formatContactMessage(contactMessage),
  })
}
