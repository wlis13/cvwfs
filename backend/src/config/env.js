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

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  mongodbUri:
    process.env.MONGODB_URI ??
    (process.env.NODE_ENV === 'production' ? undefined : 'mongodb://127.0.0.1:27017/cvwfs'),
  corsOrigin: configuredCorsOrigins?.[0] ?? defaultCorsOrigins[0],
  corsOrigins: uniqueOrigins([...defaultCorsOrigins, ...(configuredCorsOrigins ?? [])]),
}
