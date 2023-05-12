const express = require("express");

const personRouter = express.Router();

const respuesta = (req, res, next)=>{ 
    res.send('Hola soy una persona');
}

personRouter.get("/", respuesta);

const searchPerson = (req, res)=>{
    res.send (`Person ${req.params.id} found`);
}

personRouter.get("/:id", searchPerson);
module.exports = personRouter;

