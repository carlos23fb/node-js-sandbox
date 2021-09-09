const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { titulo: "Curso de Desarrollo con Node JS" })
});

router.get('/servicio', (req, res) => {
    res.render('servicios', { titulo: "Pagina de Servicios" })
})


module.exports= router;