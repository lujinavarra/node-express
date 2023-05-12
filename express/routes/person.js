const express = require("express");
const {respuesta, searchPerson} = require('../controllers')
const personRouter = express.Router();
personRouter.get("/", respuesta);
personRouter.get("/:id", searchPerson);
module.exports = personRouter;

