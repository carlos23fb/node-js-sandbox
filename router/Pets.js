const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render("pets", { arrayPets: [
        {id: '01D1', nombre: 'pulgoso', descripcion: 'Matengase alejado de el', emoji: '🐶'},
        { id: '01C1', nombre: 'Neron', descripcion: 'Imbecil', emoji: '😾' },
    ] })
})

module.exports = router;