const express = require('express');

const productRoutes= require('../controller/productsController');

const router = express.Router();

router.get('/products',productRoutes.getAllProducts);
router.get('/electronics',productRoutes.getAllElectronics);
router.get('/clothing',productRoutes.getAllClothing);
router.get('/books',productRoutes.getAllBooks);
router.get('/beauty',productRoutes.getAllBeauty);
router.get('/sports',productRoutes.getAllSports);


module.exports = router;
