const productsController = require('../model/products');

const getAllProducts =(req, res) =>{
    const products = productsController.getAllProducts();
    res.status(200).json(products);
};

const getAllElectronics =(req, res) =>{
    const electronics = productsController.getAllElectronics();
    res.status(200).json(electronics);
};

const getAllClothing =(req, res) =>{
    const clothing = productsController.getAllClothing();
    res.status(200).json(clothing);
};

const getAllBooks =(req, res) =>{
    const books = productsController.getAllBooks();
    res.status(200).json(books);
};

const getAllBeauty =(req, res) =>{
    const beauty = productsController.getAllBeauty();
    res.status(200).json(beauty);
};

const getAllSports =(req, res) =>{
    const sports = productsController.getAllSports();
    res.status(200).json(sports);
};

const getProductsByID=(req,res)=>{
    const productsID =parseInt(req.params.id);
    const products = productsController.getAllProducts();
    const search = products.find(p=> p.id === productsID);

    res.status(200).json(search);
};
module.exports ={
    getAllProducts,
    getAllElectronics,
    getAllClothing,
    getAllBooks,
    getAllBeauty,
    getAllSports,
    getProductsByID
};