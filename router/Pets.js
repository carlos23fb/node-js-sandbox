const express = require('express');
const router = express.Router();

const Pet = require('../models/pet');


router.get('/', async (req, res) => {

    try {

        const arrayPetsDB = await Pet.find()
        
        res.render("pets", {
            arrayPets: arrayPetsDB
            // [
            //     { id: '01D1', nombre: 'pulgoso', descripcion: 'Matengase alejado de el', emoji: '🐶' },
            //     { id: '01C1', nombre: 'Neron', descripcion: 'Imbecil', emoji: '😾' },
            // ]
        })

    } catch (error) {
        console.log(error);
    }
    
})

module.exports = router;