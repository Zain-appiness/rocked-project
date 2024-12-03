const express= require('express');
const router= express.Router();
const userController= require('../controller/userController');

router.post("/mark-watched",userController.markWatched);

module.exports= router;