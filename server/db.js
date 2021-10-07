const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  "d31ce2av98q80g", //database
  "akyvhidhvkpgqs", //user
  "37499cbf746f6b433af05e81a1fe9cca9a161f5803f8c642cfa1d8e3f8254097", //password

  {
    host: "ec2-52-7-228-45.compute-1.amazonaws.com",
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
