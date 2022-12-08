import { Router } from 'express';
import {
  storageUpdateImage,
  storageUploadImage,
} from '../controllers/storage_controller.js';
import { upload } from '../middleware/multerUpload.js';

const router = Router();

router.post('/upload', upload.single('image'), storageUploadImage);

router.put('/update/:id', upload.single('image'), storageUpdateImage);

export default router;
