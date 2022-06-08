import { Request, Response } from 'express'

import * as articlesService from '../services/articles.service'

const getAll = async (req: Request, res: Response) => {
  try {
    const data = await articlesService.getAll()

    res.status(data.statusCode).send(data.body)
  } catch (e: any) {
    res.status(500).send(e.message)
  }
}

const getById = async (req: Request, res: Response) => {
  const data = await articlesService.getById(req)

  res.status(data.statusCode).json(data.body)
}

export { getAll, getById }
