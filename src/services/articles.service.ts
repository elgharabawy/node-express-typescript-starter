import { Request } from 'express'

import { ServiceAPIResponse } from '../../types/service-response'
import { Article } from '../../types/articles'

const getAll = async (): Promise<ServiceAPIResponse<Article[]>> => {
  /* fetch data here */
  return {
    statusCode: 200,
    body: [
      {
        title: 'Article title',
      }
    ]
  }
}

const getById = async (req: Request): Promise<ServiceAPIResponse<Article>> => {
  /* fetch data here */
  /* id: req.params?.id */
  return {
    statusCode: 200,
    body: {
      title: `Article title ${req.params?.id}`,
    }
  }
}

export { getAll, getById }
