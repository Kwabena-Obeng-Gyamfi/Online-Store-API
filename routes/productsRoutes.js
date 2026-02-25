const express = require('express');

const productRoutes= require('../controller/productsController');

const router = express.Router();

router.get('/products',productRoutes.getAllProducts);
router.get('/products/electronics',productRoutes.getAllElectronics);
router.get('/products/clothing',productRoutes.getAllClothing);
router.get('/products/books',productRoutes.getAllBooks);
router.get('/products/beauty',productRoutes.getAllBeauty);
router.get('/products/sports',productRoutes.getAllSports);
router.get('/products/:id',productRoutes.getProductsByID);


module.exports = router;
