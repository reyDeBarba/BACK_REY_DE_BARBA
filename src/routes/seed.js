import { Router } from 'express'
import { createDataSeed } from '../controllers/create_data_controller.js'

const router = Router()

router.get('/admin/seed', createDataSeed )

export default router
