const express = require('express');

const productRoutes= require('../controller/productsController');
const userRoutes = require('../controller/userController');

const router = express.Router();

router.get('/products',productRoutes.getAllProducts);
router.get('/products/electronics',productRoutes.getAllElectronics);
router.get('/products/clothing',productRoutes.getAllClothing);
router.get('/products/books',productRoutes.getAllBooks);
router.get('/products/beauty',productRoutes.getAllBeauty);
router.get('/products/sports',productRoutes.getAllSports);
router.get('/products/:id',productRoutes.getProductsByID);
router.get('/products/minPrice/:price',productRoutes.getProductByMinPrice);
router.get('/products/maxPrice/:price',productRoutes.getProductByMaxPrice);
router.get('/products/stock/:stock',productRoutes.filterByStockStatus);
router.get('/products/electronics/:id',productRoutes.getElectronicsById);
router.get('/products/clothing/:id',productRoutes.getClothingById);
router.get('/products/books/:id',productRoutes.getBooksById);
router.get('/products/beauty/:id',productRoutes.getBeautyById);
router.get('/products/sports/:id',productRoutes.getSportsById);
router.get('/products/collaboration/:stock/:price',productRoutes.collaboration);
router.get('/products/categories/:category', productRoutes.getProductsByCategory)

//post requests
router.post('/postproducts', productRoutes.addNewProduct);
router.post('/postelectronics', productRoutes.addNewElectronicProduct);
router.post('/postclothing', productRoutes.addNewClothingProduct);
router.post('/postbeauty', productRoutes.addNewBeautyProduct);
router.post('/postsports', productRoutes.addNewSportsProduct);
router.post('/postbooks', productRoutes.addNewBookProduct);
//user post routes 
router.post('/addUser',userRoutes.addNewUser)

//put requests for updating products
router.put('/updateElectronics/:id', productRoutes.updateElectronics);
router.put('/updateClothing/:id', productRoutes.updateClothing);
router.put('/updateBooks/:id', productRoutes.updateBooks);
router.put('/updateBeauty/:id', productRoutes.updateBeauty);
router.put('/updateSports/:id', productRoutes.updateSports);

//delete requests for deleting products
router.delete('/deleteElectronics/:id', productRoutes.deleteElectronicsProduct);
router.delete('/deleteClothing/:id', productRoutes.deleteClothingProduct);
router.delete('/deleteBooks/:id', productRoutes.deleteBooksProduct);
router.delete('/deleteBeauty/:id', productRoutes.deleteBeautyProduct);
router.delete('/deleteSports/:id', productRoutes.deleteSportsProduct);

module.exports = router;
