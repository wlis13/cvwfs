export function errorHandler(error, _req, res, _next) {
  const statusCode = error.statusCode ?? (error.name === 'ValidationError' ? 400 : 500)

  res.status(statusCode).json({
    message: error.message ?? 'Internal server error',
    statusCode,
  })
}
