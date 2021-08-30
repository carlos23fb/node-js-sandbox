const http = require('http');
const server = http.createServer((req, res) => {
    res.end("Estoy respondiendo a tu solicitud v2")
})

const port = 3000;
server.listen(port, () =>{
    console.log("Escuchando solicitudes!!");
})