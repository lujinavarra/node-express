const express = require("express");
const res = require("express/lib/response");
const app = express();

app.use(express.json());

// const isAuthenticated = (req, res, next)=>{
//     if (req.params.role !== "admin"){
//         return res.send ("No soy un admin");
//     }
//     next();
// }

//app.use(isAuthenticated);

// const validadorUno = (req, res,next )=>{
//         if(parseInt(req.params.id) === 01){
//             return res.send('Person not found');
//         }
//         next();
// }

// const validadorDos = (req, res,next )=>{
//         if(parseInt(req.params.id) === 02){
//             return res.send('Person not authorized');
//         }
//         next();
// }

// const imprimir = (req, res, next)=>{
//             console.log('Hola mundo en la consola', req.baseUrl);
//             next();
// }
//PERSONA
const personRouter = express.Router();

app.use ("/persons", personRouter);

const searchPerson = (req, res)=>{
    res.send (`Person ${req.params.id} found`);
}

personRouter.get("/:id", searchPerson);

const respuesta = (req, res, next)=>{ 
        res.send('Hola soy una persona');

}

personRouter.get("/", respuesta);
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

//app.use ("/persons/", validadorUno, validadorDos, imprimir, respuesta);

//personRouter.get("/", validadorUno, validadorDos, imprimir, respuesta);


// //localhost:3000/hello
// app.use('/persons/:id',
// (req, res,next )=>{
//     if(parseInt(req.params.id) === 01){
//         return res.send('Person not found');
//     }
//     next();
// },
// (req, res,next )=>{
//     if(parseInt(req.params.id) === 02){
//         return res.send('Person not authorized');
//     }
//     next();
// },
// (req, res, next)=>{
//         console.log('Hola mundo en la consola', req.baseUrl);
//         next();
// },
// (req, res, next)=>{ 
//     res.send('Hello world');
// },

// );



const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`service started on port ${PORT}`);
});





