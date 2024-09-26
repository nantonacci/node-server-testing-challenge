const express = require("express");
const Fruits = require("../fruits/fruits-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ api: "up" });
});

module.exports = server;
