module.exports = (sequelize, Sequelize) => {
  const Coche = sequelize.define("coche", {
    marca: {
      type: Sequelize.STRING
    },
    modelo: {
      type: Sequelize.STRING
    },
    precio:{
      type: Sequelize.DOUBLE
    },
    filename: {
       type: Sequelize.STRING
     }
  });

  return Coche;
}