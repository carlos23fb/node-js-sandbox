const express = require('express');
const router = express.Router();

const Pet = require('../models/pet');


router.get('/', async (req, res) => {

    try {

        const arrayPetsDB = await Pet.find()

        res.render("pets", {
            arrayPets: arrayPetsDB
        })

    } catch (error) {
        console.log(error);
    }

})

module.exports = router;