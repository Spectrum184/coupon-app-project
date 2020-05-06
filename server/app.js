const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const session = require("express-session");
const mongoSessionStore = require("connect-mongo");
const logger = require("./logs");
const cors = require("./middleware/cors");
const database = require("./config/database");

require("dotenv").config();

const dev = process.env.NODE_ENV !== "production";
const port = process.env.PORT || 8000;
const MONGO_URL_DB = process.env.MONGO_URL;
const ROOT_URL = dev ? `http://localhost:${port}` : "https://magiamgia247.vn";
const sessionSecret = process.env.SESSION_SECRET;
const URL_MAP = {};
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};

const MongoStore = mongoSessionStore(session);
const sess = {
  name: "coupon",
  secret: sessionSecret,
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 14 * 24 * 60 * 60, // save session 14 days
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    maxAge: 14 * 24 * 60 * 60 * 1000, // expires in 14 days
  },
};

mongoose.connect(MONGO_URL_DB, options);
database();

const server = express();

if (!dev) {
  server.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(session(sess));
server.use(cors);

server.get("/", (req, res) => res.send("index"));

server.listen(port, (err) => {
  if (err) throw err;
  logger.info(`Ready on ${ROOT_URL}`);
});
