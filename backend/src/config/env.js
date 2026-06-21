import 'dotenv/config'

const defaultCorsOrigins = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'https://cvwfs*.vercel.app',
]

function parseOrigins(value) {
  return value
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
}

function uniqueOrigins(origins) {
  return [...new Set(origins.filter(Boolean))]
}

const configuredCorsOrigins = parseOrigins(process.env.CORS_ORIGIN ?? process.env.CLIENT_URL)
const smtpPort = Number(process.env.SMTP_PORT ?? 587)

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  mongodbUri:
    process.env.MONGODB_URI ??
    (process.env.NODE_ENV === 'production' ? undefined : 'mongodb://127.0.0.1:27017/cvwfs'),
  corsOrigin: configuredCorsOrigins?.[0] ?? defaultCorsOrigins[0],
  corsOrigins: uniqueOrigins([...defaultCorsOrigins, ...(configuredCorsOrigins ?? [])]),
  contactEmail: process.env.CONTACT_EMAIL ?? 'wlissesdevelopment2970@gmail.com',
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number.isNaN(smtpPort) ? 587 : smtpPort,
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM ?? process.env.SMTP_USER,
  },
}
