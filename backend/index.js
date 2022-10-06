const express = require("express");
const cors = require("cors");

 var path = require('path');

const app = express();

// public directory

 app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

const db = require("./models");


// Si pones en medio de las llaves un force:true reseteara los datos de la bd cada vez que inicia la app
db.sequelize.sync({  }).then(() => {
  console.log("re-sync db.");
});

app.get("/", (req, res) => {
  res.json({ message: "Bienvenido a la aplicacion."});
});

require("./routes/coche.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`El serve esta funcionando en el puerto: ${PORT}`);
});