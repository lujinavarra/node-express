// const {carService} = require('../services')

const respuestaCars = (req, res, next)=>{ 
    res.send('Hola soy una cars');
}
const searchCar = (req, res)=>{
    res.send (`Cars ${req.params.id} found`);
    // const resultado = carService.search(req.params.id);
    // if(resultado){
    //     res.send (`Cars ${resultado} found`);
    // }else{
    //     res.status(404);
    //     res.end("Not found")
    // }  
}

const saveCars = (req, res, next)=>{ 
    res.send('Car saved');
}
module.exports = {respuestaCars, searchCar, saveCars}