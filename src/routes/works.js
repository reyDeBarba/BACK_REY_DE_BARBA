import { Router } from 'express';
import worksController from '../controllers/works_controller.js';

const router = Router();

router.put('/:barberId', worksController.createBarberWork);

router.get('/:barberId', worksController.getBarberWorkId);

export default router;
