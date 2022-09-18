import { Router } from 'express'
import { getEnv } from '../../libs/entry-assets.js'

const router = Router()
const env = getEnv()

router.get('/', async (req, res) => {
  res.end('api: /api')
})

router.get('/apple/', async (req, res) => {
  res.end('api: /api/apple')
})

router.get('/banana/', async (req, res) => {
  res.end('api: /api/banana')
})

export default router
