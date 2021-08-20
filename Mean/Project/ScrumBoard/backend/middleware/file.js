const upload = async (req, res, next) => {
  //archivos que se cargan desde un formulario
  if (req.files.image.type) {
    //aqui se guarda el tipo de dato
    let type = req.files.image.type;

    //si es diferente a este formato.

    if (
      type !== "image/png" &&
      type !== "image/jpg" &&
      type !== "image/jpeg" &&
      type !== "image/gif"
    ) {
        return res.status(400).send("Invalid format : only .png .jpg .jpeg .gif")
        
    }
    else{
        next();
    }
  }
};

module.exports = upload;
