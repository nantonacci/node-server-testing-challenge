const express = require("express");
const Fruits = require("../fruits/fruits-model.js");

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  Fruits.getAll()
    .then(fruits => {
      res.status(200).json(fruits);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json(error);
    });
});

module.exports = server;
