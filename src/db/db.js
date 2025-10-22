const mongoose = require("mongoose");

function connectDB() {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log("Database connected");
    })
    .catch((error) => {
      console.log(error, () => {
        console.log("Database not connected");
      });
    });
}

module.exports = connectDB;
