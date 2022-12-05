import { Router } from 'express';
import { storageUploadImage } from '../controllers/storage_controller.js';
import { upload } from '../middleware/multerUpload.js';

const router = Router();

router.post('/upload', upload.single('image'), storageUploadImage);

export default router;
