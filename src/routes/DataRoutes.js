const express = require('express');
const router = express.Router();
const dataController=require('../controllers/DataController')

router.get('/',dataController.uploadData)
router.get('/filter/:priceMin/:priceMax/:rooms',dataController.filterPriceRoom)

module.exports = router;