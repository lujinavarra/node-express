const express = require("express");

//const res = require("express/lib/response");
const app = express();
const PORT = 3000;
app.use(express.json());

const personRouter = require('./routes')
app.use ("/persons", personRouter);


//CAR
const carRouter = express.Router();
app.use("/cars", carRouter)
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




app.listen(PORT, ()=>{
    console.log(`service started on port ${PORT}`);
});





