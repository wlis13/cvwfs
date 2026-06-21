export function errorHandler(error, _req, res, _next) {
  const isMongoConnectionError =
    error.name === 'MongooseServerSelectionError' ||
    error.message?.includes('Could not connect to any servers in your MongoDB Atlas cluster')

  const statusCode = error.statusCode ?? (error.name === 'ValidationError' ? 400 : isMongoConnectionError ? 503 : 500)
  const message = isMongoConnectionError
    ? 'Nao foi possivel conectar ao MongoDB Atlas. Verifique a MONGODB_URI e libere o acesso de rede no IP Access List do Atlas.'
    : (error.message ?? 'Internal server error')

  res.status(statusCode).json({
    message,
    statusCode,
  })
}
