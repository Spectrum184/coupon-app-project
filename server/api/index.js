const publicApi = require("./public");
const adminApi = require("./admin");

function api(server) {
  server.use("/api/public", publicApi);
  server.use("/api/admin", adminApi);
}

module.exports = api;
