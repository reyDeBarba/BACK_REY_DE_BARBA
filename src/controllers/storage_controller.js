import cloudinary from '../settings/clodinary.js';

const storageUploadImage = async (req, res) => {
  console.log(req.file);
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);
    console.log({ result });

    if (!result)
      return res.status(500).json('Ocurrio un problema al subir la imagen');

    const data = {
      fileName: req.body.name,
      photo: result.secure_url,
      photoPublicId: result.public_id,
    };

    res.status(200).json({ status: 200, message: 'Upload image', data });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Ops, upload image error' });
  }
};

const storageUpdateImage = async (req, res) => {
  const { id } = req.params;
  try {
    await cloudinary.v2.uploader.destroy(id);

    const result = await cloudinary.v2.uploader.upload(req.file.path);
    if (!result)
      return res.status(500).json('Ocurrio un problema al subir la imagen');
    const data = {
      fileName: req.body.name,
      photo: result.secure_url,
      photoPublicId: result.public_id,
    };
    res.status(200).json({ status: 200, message: 'Upload image', data });
  } catch (error) {
    res.status(500).json({ status: 500, message: 'Ops, upload image error' });
  }
};

export { storageUploadImage, storageUpdateImage };
