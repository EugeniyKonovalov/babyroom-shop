require("dotenv").config();
const express = require("express");
const sequelize = require("./db");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const router = require("./routes/index");
const errorHandler = require("./middleware/ErrorHandlingMiddleware");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "img")));
app.use(fileUpload({}));
app.use("/api", router);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
const start = async () => {
  try {
    await sequelize.authenticate().then(() => {
      console.log("Connection has been established successfully.");
    });
    await sequelize.sync().then(() => {
      console.log(`Database & tables created!`);
    });
  } catch (e) {
    console.log(e);
  }
};
start();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
