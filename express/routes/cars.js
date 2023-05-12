const express = require("express");
const carRouter = express.Router();

const {searchCar, saveCars, respuestaCars} = require('../controllers');

carRouter.get("/", respuestaCars);
carRouter.get("/:id", searchCar);
carRouter.post("/save", saveCars);
module.exports = carRouter;