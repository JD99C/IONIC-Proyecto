const db = require("../models");
const Coche = db.coches;
const Op = db.Sequelize.Op;

// Create and Save a new Coche
exports.create = (req, res) => {
  // Validate request
  if (!req.body.brand || !req.body.model){
    res.status(400).send({
      message: "¡El contenido no puede estar vacio!"
    });
  }

  // Create a Coche
  const coche = {
    marca: req.body.marca,
    modelo: req.body.modelo,
    precio: req.body.precio,
    filename: req.file ? req.file.filename : ""
  }

  // Save Bicycle in the database
  Coche.create(coche).then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Algun erro ocurrio mientra se creaba el dato"
    })
  });
};

// Retrieve all Bicycles from the database.
exports.findAll = (req, res) => {
  Coche.findAll().then(data => {
    res.send(data);
  }).catch(err => {
    res.status(500).send({
      message: err.message || "Algun error ocurrio mientras se recuperada los datos"
    })
  })
};

// Find a single Bicycle with an id
exports.findOne = (req, res) => {

  const id = req.params.id;

  Coche.findByPk(id)
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `No se puede encontrar el dato con id=${id}.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al cargar dato con id=" + id
      });
    });

};

// Update a Bicycle by the id in the request
exports.update = (req, res) => {

  const id = req.params.id;

  Coche.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dato actualizado!"
        });
      } else {
        res.send({
          message: `No se puede actualizar el dato con id=${id}. El dato no se ha podido encontrar o req.body esta vacio.`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error al actualizar el dato con id=" + id
      });
    });

};

// Delete a Bicycle with the specified id in the request
exports.delete = (req, res) => {

  const id = req.params.id;

  Coche.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Dato eliminado correctamente"
        });
      } else {
        res.send({
          message: `No se puede eliminar el dato con id=${id}. Quizas el dato no exista!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "No se puede borrar el dato con id=" + id
      });
    });

};
