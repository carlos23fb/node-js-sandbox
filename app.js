const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Mi Respuesta es express')
});

app.get('/about', (req, res) => {
    res.send('Esta es la pagina "about"')
})

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
})