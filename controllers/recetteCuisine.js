const mongoose = require('mongoose');
const {recipeSchema} = require('../models/recette');
const recette = mongoose.model("recette", recipeSchema);


const addNewRecette = (req,res) => {
    let newRecette = newRecette(req.body);
    newRecette.save((err, answer) => {
        if(err){res.send(err);}
        else{
            res.send(answer);
        }
    })
}

const getAllRecettes = (req,res) => {
    recette.find({},(err,answer) => {
        if(err){res.send(err);}
    else{
        res.send(answer);
}
})
}

const getOneRecetteById = (req, res) => {
    const recetteId = req.params.id;
    recette.findOne({ _id: recetteId }, (err, answer) => {
        if (err) {
            res.send(err);
        } else {
            res.send(answer);
        }
    });
}






module.exports = {
    addNewRecette,
    getAllRecettes,
    getOneRecetteById,
};