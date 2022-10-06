module.exports = app => {
  const coches = require("../controllers/coche.controller.js");
  var upload = require('../multer/upload');

  var router = require("express").Router();

  // Crear un nuevo Coche

  router.post("/", upload.single('file'), coches.create);
  //router.post("/", bicycles.create);

  // Recuperar todo los coches
  router.get("/", coches.findAll);

  // Recuperar un solo coche con la id
  router.get("/:id", coches.findOne);

  // Actualizar un coche con id
  router.put("/:id", coches.update);

  // Borrar un coche con id
  router.delete("/:id", coches.delete);

  app.use("/api/coche", router);
}