const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/routes'));
app.use('/pets', require('./router/Pets'));

app.use((req, res, next) => {
    res.status(404).render('404', { titulo: "Error Not Found", descripcion: "No se ha encontrado la ruta" })
})

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${port}`);
})