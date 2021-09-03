const express = require('express');
const app = express();

const port = 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')

app.get('/', (req, res) => {
    res.render('index', { titulo: "mi titulo" })
});

app.get('/about', (req, res) => {
    res.send('Esta es la pagina "about"')
})

app.get('/servicio', (req, res) => {

    res.render('servicios', { titulo: "Pagina de Servicios" })
})

app.use(express.static(__dirname + "/public"))

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
})

app.use((req, res, next) => {
    res.status(404).render('404', { titulo: "Error Not Found", descripcion: "No se ha encontrado la ruta" })
})