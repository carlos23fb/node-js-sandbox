const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

// Data Base connection

const mongoose = require('mongoose');

const user = 'course_node';
const password = 'kCbZSXAmequYMwdn';
const dbname = 'petshop'
const uri = `mongodb+srv://${user}:${password}@cluster0.ql4mt.mongodb.net/${dbname}?retryWrites=true&w=majority`;

// 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Data Base conected'))
    .catch(() => console.log('Erro conecting data base'))

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