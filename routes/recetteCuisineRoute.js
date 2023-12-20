const express = require ('express');
const Recette = require('../models/recette');



const router = express.Router();
const {addNewRecette,getAllRecettes,getOneRecetteById} = require('../controllers/recetteCuisine');

//Create a new recipe
//router.post('/recette', addNewRecette)
router.get('/recette', getAllRecettes);
router.get('/recetteDetail/:id', getOneRecetteById);

// ATTENTION CETTE ROUTE CONTIENT DU CODE METIER, ELLE NE RESPECTE LE MVC
router.post('/recette', async (req, res) => {
    const {name,ingredients,origine,instructions,lienImage} = req.body;

    try {
        const recette = new Recette ({name,ingredients,origine,instructions,lienImage});
        await recette.save();
        res.send(recette);
    } catch (error){
      console.error(error);
      res.status(500).send(error);
    }
})

// router.get ('/recette', async(req, res) =>{
//     try {
//         const recettes = await Recette.find({});
//         res.send(recettes);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//     }
// });

// router.get ('/recetteDetail/:id', async(req, res) =>{
//     try {
//         const {id} = req.params;
//         const recettes = await Recette.findById(id);
//         res.send(recettes);
//     } catch (error) {
//         console.error(error);
//         res.status(500).send(error);
//     }
// });

module.exports = router;

