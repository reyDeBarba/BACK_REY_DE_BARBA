import cloudinary from '../settings/clodinary.js';

const storageUploadImage = async (req, res) => {
  try {
    const result = await cloudinary.v2.uploader.upload(req.file.path);

    console.log({ result });
  } catch (error) {}
};

export { storageUploadImage };
