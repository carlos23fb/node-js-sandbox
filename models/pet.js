const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
    nombre: String,
    descripcion: String,
    emoji: String
})


const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;