const express = require("express");
const router = express.Router();
const usuarioController = require("../controllers/usuarioControllers");
const { check } = require("express-validator");

router.post(
  "/",
  [
    check("nombre", "El nombres es obligatorio").not().isEmpty(),
    check("email", "Agrega un email válido").isEmail(),
    check("password", "El password debe tener al menos 6 caracteres").isLength({
      min: 6,
    }),
  ],
  usuarioController.crearUsuario
);

module.exports = router;
