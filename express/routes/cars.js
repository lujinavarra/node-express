const express = require("express");
const carRouter = express.Router();


//app.use("/cars", carRouter)
const respuestaCars = (req, res, next)=>{ 
    res.send('Hola soy una cars');

}
carRouter.get("/", respuestaCars);

const searchCar = (req, res)=>{
    res.send (`Car ${req.params.id} found`);
}

carRouter.get("/:id", searchCar);

const saveCars = (req, res, next)=>{ 
    res.send('Car saved');

}
carRouter.post("/save", saveCars);

module.exports = carRouter;