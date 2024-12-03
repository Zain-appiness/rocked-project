const express= require('express');
const router= express.Router();
const adminController= require('../controller/adminController');

router.get("/get/all",adminController.getAllContetnt);
router.get("/:id",adminController.getContentById);
router.post("/create",adminController.saveContent);
router.get('/published/status',adminController.getPublishedContent);
router.put('/:id',adminController.updateContentById)

module.exports= router;