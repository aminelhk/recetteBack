const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema ({
    name: {
        type: String,
        required : "Enter name"
    },

    ingredients: {
        type: String,
        
    },

    origine: {
         type: String,
        
    },

    instructions: {
        type: String,
        
    },

    lienImage: {
        type: String,
   
    },

    created_date:{
        type: Date,
        default: Date.now()
    }
},{strict:false})

module.exports = mongoose.model('recette', recipeSchema);