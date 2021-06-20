const express = require('express');
const corsMiddle = require('./util/cors');

const api = express();
const PORT = 3001;

api.use(corsMiddle);

api.get("/getAllUser",(req,resp) =>{

    resp.status(200).send(users)
})

api.get("*",(req,resp) =>{
    resp.status(404).send("<h1>Not Found</h1>")
})

api.listen(PORT, () => {
    console.log('Ejecutado en el puerto ' + PORT);
})


module.exports = api;

let users = [
    { 
        "id":1,
        "Nombre": "Felipe Camiroaga",
        "Edad":49,
        "fechaNacimiento":"8-10-1966",
        "Ciudad":"Santiago",
        "Pais":"Chile"
    },
    {
        "id":2,
        "Nombre": "Lebron James",
        "Edad":36,
        "fechaNacimiento":"31-08-2019",
        "Ciudad":"Ohio",
        "Pais":"USA"
    },
    {
        "id":3,
        "Nombre": "Jim Carrey",
        "Edad":59,
        "fechaNacimiento":"17-01-1962",
        "Ciudad":"NewMarket",
        "Pais":"Canada"
    },
    {
        "id":2,
        "Nombre": "Sebastian Gaete",
        "Edad":31,
        "fechaNacimiento":"31-08-1989",
        "Ciudad":"Santiago",
        "Pais":"Chile"
    },
]