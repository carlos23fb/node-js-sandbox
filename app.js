const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const axios = require('axios');

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

require('dotenv').config()


// Set Port 
const port = process.env.PORT || 3000;

// Data Base connection

const mongoose = require('mongoose');


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@cluster0.ql4mt.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

// 
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('Data Base connected'))
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