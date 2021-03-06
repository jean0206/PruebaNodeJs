const express = require('express');
const router = express.Router();
const dataController=require('../controllers/DataController')

router.get('/',dataController.uploadData)
router.get('/filter/:priceMin/:priceMax/:rooms',dataController.filterPriceRoom)
router.get('/zone/filter/:latitude/:length/:distance',dataController.getAverage)
router.get('/report/:latitude/:length/:fileType',dataController.sendReport)

module.exports = router;