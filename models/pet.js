const mongoose = require('mongoose');
const { Schema } = mongoose;

const petSchema = new Schema({
    name: String,
    descripcion: String
})


const Pet = mongoose.model('Pet', petSchema);

module.exports = Pet;