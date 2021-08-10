import { Request, Response, NextFunction } from 'express'
import { IError } from '../interfaces'

export const NotFound = (req: Request, res: Response, next: NextFunction) => {
  res.status(404)
  const error = new Error(`Invalid route ${req.originalUrl}`)
  next(error)
}

export const ErrorHandler = (err: IError, _req: Request, res: Response, _next: NextFunction) => {
  const statusCode = res.statusCode !== 200 ? res.statusCode : 500
  res.status(statusCode)
  res.json({
    success: false,
    statusCode,
    data: {
      message: err.message
    }
  })
}
