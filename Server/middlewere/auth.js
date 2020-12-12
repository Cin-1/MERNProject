const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header("x-auth-token");

  if (!token) {
    console.log("uno", token);
    res.status(401).json({ msg: "No hay token" });
  }
  try {
    const cifrado = jwt.verify(token, process.env.SECRETA);
    req.usuario = cifrado.usuario;
    return next();
  } catch (error) {
    console.log(error);
    res.status(400).json({ msg: "Token no válido" });
  }
};
