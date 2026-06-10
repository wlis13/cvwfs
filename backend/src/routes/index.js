import { Router } from 'express'
import { contactRouter } from './contact.routes.js'
import { healthRouter } from './health.routes.js'

export const apiRouter = Router()

apiRouter.get('/', (_req, res) => {
  res.json({
    name: 'cvwfs-api',
    status: 'ok',
    health: '/api/health',
  })
})

apiRouter.use('/health', healthRouter)
apiRouter.use('/contact', contactRouter)
