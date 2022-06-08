/* eslint-disable no-unused-vars */

import { Request, Response, NextFunction } from 'express'

const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const message = 'Resource not found'

  res.status(404).send(message)
}

export { notFoundHandler }