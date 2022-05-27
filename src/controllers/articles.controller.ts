import { Request, Response, NextFunction } from 'express'

import * as articlesService from '../services/articles.service'

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const data = await articlesService.getAll(req)
  
  res.status(data.statusCode).json(data.body)

  next()
}

const getById = async (req: Request, res: Response, next: NextFunction) => {
  const data = await articlesService.getById(req)

  res.status(data.statusCode).json(data.body)

  next()
}

export { getAll, getById }
