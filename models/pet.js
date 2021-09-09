const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petSchema = new Schema({
    name : String,
    descripcion : String
})