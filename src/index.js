const express = require('express')
const operaciones = require("../util/operacion")

const app = express();
const PORT = 3001;


app.get("/getAllUser",(req,resp) =>{

    resp.status(200).send("<h1></h1>")
})

app.get("*",(req,resp) =>{
    resp.status(404).send("<h1>Not Found</h1>")
})

app.listen(PORT, () => {
    console.log('Ejecutado en el puerto ' + PORT);
})
