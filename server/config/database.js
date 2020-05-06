const mongoose = require("mongoose");
const logger = require("../logs");

module.exports = function database() {
  mongoose.connection.on("connected", function connect() {
    logger.info("Mongoose default connection is opened ");
  });

  mongoose.connection.on("error", function error(err) {
    logger.error(`Mongoose default connection has occur ${err} error`);
  });

  mongoose.connection.on("disconnected", function disconnect() {
    logger.warn("Mongoose default connection is disconnected");
  });

  process.on("SIGINT", function sigint() {
    mongoose.connection.close(function close() {
      logger.info(
        "Mongoose default connection is disconnected due to application termination",
      );
      process.exit(0);
    });
  });
};
