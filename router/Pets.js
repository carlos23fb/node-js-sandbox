const express = require('express');
const router = express.Router();

const Pet = require('../models/pet');

// Display a list with all documents from pet mongo collection
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

// Render form view for create new pets
router.get('/create', (req, res) => {res.render('create')})


// Create a new Pet Document
router.post('/', async (req,res) => {
    const body = req.body
    try {
        await Pet.create(body)
        res.redirect('/pets')
    } catch (error) {
        console.log('error', error);
    }
})

router.get('/:id', async (req, res) => {
    const id = req.params.id
    try {
        petDocument =  await Pet.findById(id)
        res.render('details', {
            petObject: petDocument,
            error: false
        })
    } catch (error) {
        console.log('error', error);
        res.render('details', {
            error: true,
            messaje : "pet doesn't exist"
        })
    }
})


module.exports = router;