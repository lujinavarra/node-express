const express = require("express");
const bodyParser = require('body-parser');
const logging = require('./middleware');
const {userRouter} = require('./routes');
const {initializeDB} = require('./config/dbConfig');

//const res = require("express/lib/response");
const app = express();
const PORT = 3000;
app.use(express.json());


//persons
// app.use ("/persons", personRouter);
// //cars
// app.use("/cars", carRouter);

app.use("/user", userRouter);

app.listen(PORT, async () => {
    await initializeDB();
    console.log(`Hello world! Este es nuestro primer server. Escuchando peticiones en el puerto: ${PORT}`
    );
});







