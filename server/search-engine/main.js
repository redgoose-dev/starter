import * as path from 'path'
import { Router } from 'express'
import { getEnv } from '../libs/entry-assets.js'

const router = Router()
const env = getEnv()
const __dirname = path.resolve('server/search-engine')

router.get('/', async (req, res) => {
  res.end('search-engine: /')
  // TODO: load template file
  // res.render('index')
})

router.get('/search-foo', async (req, res) => {
  res.end('search-engine: /search-foo')
})

// export default router

export default function searchEngine(app)
{
  // TODO: setup template
  // app.set('view engine', 'ejs')
  // app.set('views', `${__dirname}/template`)
  app.use(router)
}
