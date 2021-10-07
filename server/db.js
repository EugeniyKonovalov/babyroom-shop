const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "d72jvfspnr5ucb", //database
  "gyyzroeqzcshqx", //user
  "073afef54a3da946958304424688c5fcfaf83bd44f3f51955263534426bab18d", //password

  {
    host: "ec2-54-167-168-52.compute-1.amazonaws.com",
    dialect: "postgres",
    protocol: "postgres",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);
module.exports = sequelize;
