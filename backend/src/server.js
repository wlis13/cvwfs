import { app } from './app.js'
import { connectDatabase, disconnectDatabase } from './config/database.js'
import { env } from './config/env.js'

let server

async function bootstrap() {
  await connectDatabase()

  server = app.listen(env.port, () => {
    console.log(`API running on http://localhost:${env.port}`)
  })
}

function shutdown(signal) {
  console.log(`${signal} received. Shutting down API...`)

  server?.close(async () => {
    await disconnectDatabase()
    process.exit(0)
  })
}

process.on('SIGINT', shutdown)
process.on('SIGTERM', shutdown)

bootstrap().catch((error) => {
  console.error('Failed to start API:', error)
  process.exit(1)
})
