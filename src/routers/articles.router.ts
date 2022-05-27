import express from 'express'

import * as articlesController from '../controllers/articles.controller'

const router = express.Router()

/* GET articles */
router.get('/', articlesController.getAll)

/* GET article by id */
router.get('/:id', articlesController.getById)

export { router as default }
