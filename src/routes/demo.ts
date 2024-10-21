import express from 'express'
import { getDemoData } from '../controllers/demo-controller'

const router = express.Router()

router.get('/', getDemoData)

export default router