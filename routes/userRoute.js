const express= require('express');
const router= express.Router();
const userController= require('../controller/userController');

router.post("/mark-watched",userController.markWatched);
router.put("/mark-watched/:id", userController.updateMarkedStatus);
module.exports= router;