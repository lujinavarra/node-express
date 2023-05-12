const respuesta = (req, res, next)=>{ 
    res.send('Hola soy una persona');
}
const searchPerson = (req, res)=>{
    res.send (`Person ${req.params.id} found`);
}
module.exports = {respuesta, searchPerson}