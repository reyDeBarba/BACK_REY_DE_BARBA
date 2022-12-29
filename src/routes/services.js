import { Router } from 'express';
import serviceControllers from '../controllers/services_controller.js';
import roleValidate from '../middleware/roleValidate.js';

const router = Router();

/**
 * Trare todos los servicios
 */
router.get('/', serviceControllers.allServices);

/**
 * Crear un nuevo servicio
 */
router.post(
  '/',
  roleValidate.varifyTokenAndAdmin,
  serviceControllers.createService,
);

/**
 * Traer todos los barberos
 */
router.put('/:id', serviceControllers.deleteService);

export default router;
