const express = require('express');
const app = express();

require('dotenv').config()

const port = process.env.PORT || 3000;

// Data Base connection

const mongoose = require('mongoose');

const user = 'course_node';
const password = 'kCbZSXAmequYMwdn';
const dbname = 'petshop'
const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ql4mt.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

// 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Data Base conected'))
    .catch(() => console.log("Error Can't connect to the database "))

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views')


app.use(express.static(__dirname + "/public"))

app.use('/', require('./router/routes'));
app.use('/pets', require('./router/Pets'));

app.use((req, res, next) => {
    res.status(404).render('404', { titulo: "Error Not Found", descripcion: "No se ha encontrado la ruta" })
})

app.listen(port, () => {
    console.log(`Escuchando desde el puerto ${process.env.PORT}`);  
})