import 'dotenv/config'

export const env = {
  nodeEnv: process.env.NODE_ENV ?? 'development',
  port: Number(process.env.PORT ?? 4000),
  mongodbUri:
    process.env.MONGODB_URI ??
    (process.env.NODE_ENV === 'production' ? undefined : 'mongodb://127.0.0.1:27017/cvwfs'),
  corsOrigin: process.env.CORS_ORIGIN ?? 'http://localhost:5173',
}
