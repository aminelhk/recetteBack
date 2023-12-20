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

// const addNewRecette = (req,res) => {
//     let newRecette = new Recette(req.body);
//     newRecette.save()
//         .then(answer => res.send(answer))
//         .catch(err => res.status(500).send(err));
// }

// const getAllRecettes = (req,res) => {
//     recette.find({},(err,answer) => {
//         if(err){res.send(err);}
//     else{
//         res.send(answer);
// }
// })
// }

const getAllRecettes = (req, res) => {
    recette.find()
        .then(answer => res.send(answer))
        .catch(err => res.status(500).send(err));
}

const getOneRecetteById = (req, res) => {
    const recetteId = req.params.id;
    recette.findOne({ _id: recetteId })
        .then(answer => res.send(answer))
        .catch(err => res.status(500).send(err));
}

// const getOneRecetteById = (req, res) => {
//     const recetteId = req.params.id;
//     recette.findOne({ _id: recetteId }, (err, answer) => {
//         if (err) {
//             res.send(err);
//         } else {
//             res.send(answer);
//         }
//     });
// }






module.exports = {
    addNewRecette,
    getAllRecettes,
    getOneRecetteById,
};