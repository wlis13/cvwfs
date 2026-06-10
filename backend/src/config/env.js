import 'dotenv/config'

function parseOrigins(value) {
  return value
    ?.split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)
}

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  mongodbUri:
    process.env.MONGODB_URI ??
    (process.env.NODE_ENV === 'production' ? undefined : 'mongodb://127.0.0.1:27017/cvwfs'),
  corsOrigin: process.env.CORS_ORIGIN ?? process.env.CLIENT_URL ?? 'http://localhost:5173',
  corsOrigins: parseOrigins(process.env.CORS_ORIGIN ?? process.env.CLIENT_URL ?? 'http://localhost:5173'),
}
