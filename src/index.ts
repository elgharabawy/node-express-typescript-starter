import express, { Express, Request, Response } from 'express'
import cors from 'cors'
import helmet from 'helmet'

import articlesRouter from './routers/articles.router'

const PORT = process.env.PORT || 8080

const app: Express = express()

app.use(helmet())
app.use(cors())
app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Welcome')
})

// Articles routes

app.use('/articles', articlesRouter)

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

export { app as default, server }
