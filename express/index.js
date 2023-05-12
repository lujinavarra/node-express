const express = require("express");

//const res = require("express/lib/response");
const app = express();
const PORT = 3000;
app.use(express.json());

const {personRouter, carRouter} = require('./routes')
//persons
app.use ("/persons", personRouter);
//cars
app.use("/cars", carRouter)

app.listen(PORT, ()=>{
    console.log(`service started on port ${PORT}`);
});





