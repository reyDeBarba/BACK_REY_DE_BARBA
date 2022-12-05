import { Router } from 'express';
import authRoutes from './auth.js';
import barberRoutes from './barber.js';
import discountsRoutes from './discounts.js';
import postsRoutes from './posts.js';
import seedRoutes from './seed.js';
import servicesRoutes from './services.js';
import storageRoutes from './storage.js';
import turnsRoutes from './turns.js';
import usersRoutes from './user.js';
import worksRoutes from './works.js';

const router = Router();

/**
 * Juntamos todas las rutas en un solo path
 */
router.use('/auth', authRoutes);
router.use('/barbers', barberRoutes);
router.use('/discounts', discountsRoutes);
router.use('/posts', postsRoutes);
router.use('/seed', seedRoutes);
router.use('/services', servicesRoutes);
router.use('/storage', storageRoutes);
router.use('/turns', turnsRoutes);
router.use('/users', usersRoutes);
router.use('/works', worksRoutes);

export default router;
