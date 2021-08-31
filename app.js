const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Mi Respuesta es express')
});

app.get('/about', (req, res) => {
    res.send('Esta es la pagina "about"')
})

app.use(express.static(__dirname + "/public"))

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
})

app.use((req, res, next) => {
    res.status(404).sendFile(__dirname + "/public/404.html")
})