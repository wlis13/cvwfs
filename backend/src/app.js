import cors from 'cors'
import express from 'express'
import helmet from 'helmet'
import morgan from 'morgan'
import { env } from './config/env.js'
import { errorHandler } from './middleware/errorHandler.js'
import { notFoundHandler } from './middleware/notFoundHandler.js'
import { apiRouter } from './routes/index.js'

export const app = express()

function originMatchesPattern(origin, pattern) {
  if (!pattern.includes('*')) {
    return origin === pattern
  }

  const regex = new RegExp(`^${pattern.replace(/[.+?^${}()|[\]\\]/g, '\\$&').replaceAll('*', '.*')}$`)
  return regex.test(origin)
}

function isAllowedOrigin(origin) {
  return env.corsOrigins.some((allowedOrigin) => originMatchesPattern(origin, allowedOrigin))
}

const corsOptions = {
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  origin(origin, callback) {
    if (!origin || isAllowedOrigin(origin)) {
      callback(null, true)
      return
    }

    const error = new Error(`CORS origin not allowed: ${origin}`)
    error.statusCode = 403
    callback(error)
  },
}

app.get('/', (_req, res) => {
  res.json({
    name: 'cvwfs-backend',
    status: 'ok',
    health: '/api/health',
  })
})

app.use(helmet())
app.use(cors(corsOptions))
app.options(/.*/, cors(corsOptions))
app.use(express.json({ limit: '1mb' }))
app.use(express.urlencoded({ extended: true }))

if (env.nodeEnv !== 'test') {
  app.use(morgan('dev'))
}

app.use('/api', apiRouter)
app.use(notFoundHandler)
app.use(errorHandler)
