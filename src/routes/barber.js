import { Router } from 'express';
import authRole from '../middleware/roleValidate.js';
import barberController from '../controllers/barber_controller.js';

const router = Router();

/**
 * Crear barbero
 */
router.post('/', barberController.createBarber);

/**
 * Traer un barbero
 */
router.get('/:id', barberController.getOneBarber);

/**
 * Traer todos los barberos
 */
router.get('/', barberController.getAllBarbers);

/**
 * Traer todos los barberos
 */
router.put('/:id', barberController.deleteBarber);

export default router;
