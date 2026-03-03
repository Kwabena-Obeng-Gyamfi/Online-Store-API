const productsController = require('../model/products');

const errorResponse =(req,res)=>
    {
        res.status(404).json({message:'product not Found'});
    };


// getting all products 
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


//getting products by ID

const getProductsByID=(req,res)=>{
    const productsID = parseInt(req.params.id);
    const products = productsController.getAllProducts();
    const search = products.find(p=> p.id === productsID);

    if(!search){
        return errorResponse(req,res);
    }

    else return res.status(200).json(search);
};

const getElectronicsById =(req,res)=>{
	const ID = parseInt(req.params.id);
	const  electronicsID = productsController.getAllElectronics();
	
	const IdSearch = electronicsID.find(e=> e.id === ID)
		
		if(!IdSearch)
		return errorResponse(req,res);
		else return res.status(200).json(IdSearch);
	
};

const getClothingById =(req,res)=>{
	const ID = parseInt(req.params.id);
	const  clothingID = productsController.getAllClothing();
	
	const IdSearch = clothingID.find(c=> c.id === ID)
		
		if(!IdSearch)
		return errorResponse(req,res);
		else return res.status(200).json(IdSearch);
	
};

const getBooksById =(req,res)=>{
	const ID = parseInt(req.params.id);
	const  booksID = productsController.getAllBooks();
	
	const IdSearch = booksID.find(b=> b.id === ID)
		
		if(!IdSearch)
		return errorResponse(req,res);
		else return res.status(200).json(IdSearch);
	
};

const getBeautyById =(req,res)=>{
	const ID = parseInt(req.params.id);
	const  beautyID = productsController.getAllBeauty();
	
	const IdSearch = beautyID.find(b=> b.id === ID)
		
		if(!IdSearch)
		return errorResponse(req,res);
		else return res.status(200).json(IdSearch);
	
};

const getSportsById =(req,res)=>{
	const ID = parseInt(req.params.id);
	const  sportsID = productsController.getAllSports();
	
	const IdSearch = sportsID.find(s=> s.id === ID)
		
		if(!IdSearch)
		return errorResponse(req,res);
		else return res.status(200).json(IdSearch);
	
};

const getProductByMinPrice = (req,res)=>{

	const productMinPrice= req.params.price;
	const minPrice = productsController.getAllProducts();

	const productPrice = minPrice.filter(m=>m.price >= productMinPrice )

	res.status(200).json(productPrice);
	
	
};

const getProductByMaxPrice = (req,res)=>{

	const productMaxPrice= req.params.price;
	const maxPrice = productsController.getAllProducts();

	const productPrice = maxPrice.filter(m=> m.price <= productMaxPrice );

	res.status(200).json(productPrice);
	
	
};

const filterByStockStatus =(req,res)=>{
// lets make our own parseBoolean function to convert string to boolean

function parseBoolean(value) {
    if (typeof value !== 'string') return undefined;
    const lowerValue = value.toLowerCase();
    if (lowerValue === 'true') return true;
    else if (lowerValue === 'false') return false;
    else return errorResponse(req,res);
    
}
	const stockStatus= parseBoolean(req.params.stock);
	const productStockStatus = productsController.getAllProducts();
	
	const status = productStockStatus.filter(p=>(p.stock) === stockStatus);

	res.status(200).json(status);
};

const collaboration =(req,res)=>{
    const mixParameters = filterByStockStatus() && getProductByMinPrice();
    res.status(200).json(mixParameters);
};




// working on post requests now 
const addNewProduct =(req,res)=>{
    const {name, category, price, stock} = req.body;

    const newProduct = {
        id:productsController.getAllProducts().length + 1, // auto-increment ID
        name,
        category,
        price,
        stock
    };

    productsController.getAllProducts().push(newProduct);

    res.status(201).json({message: 'New product added successfully', data: newProduct});
};


const addNewElectronicProduct =(req,res)=>{

const {name,price,category,stock}= req.body;

const newProduct={  
id: productsController.getAllElectronics().length+1,
name,
price,
category,
stock

}

productsController.getAllElectronics().push(newProduct);

res.status(201).json({message: 'New product added successfully', data: newProduct});


};

const addNewClothingProduct =(req,res)=>{

const {name,price,category,stock}= req.body;

const newProduct={  
id: productsController.getAllClothing().length+1,
name,
price,
category,
stock

}

productsController.getAllClothing().push(newProduct);

res.status(201).json({message: 'New product added successfully', data: newProduct});


};

const addNewBeautyProduct =(req,res)=>{

const {name,price,category,stock}= req.body;

const newProduct={  
id: productsController.getAllBeauty().length+1,
name,
price,
category,
stock

}

productsController.getAllBeauty().push(newProduct);

res.status(201).json({message: 'New product added successfully', data: newProduct});


};

const addNewSportsProduct =(req,res)=>{

const {name,price,category,stock}= req.body;

const newProduct={  
id: productsController.getAllSports().length+1,
name,
price,
category,
stock

}

productsController.getAllSports().push(newProduct);

res.status(201).json({message: 'New product added successfully', data: newProduct});


};

const addNewBookProduct =(req,res)=>{

const {name,price,category,stock}= req.body;

const newProduct={  
id: productsController.getAllBooks().length+1,
name,
price,
category,
stock

}

productsController.getAllBooks().push(newProduct);

res.status(201).json({message: 'New product added successfully', data: newProduct});


};




// lets make put resquest, find product, deconstruct , fallback value rule if new value null use old value
//object.feild = new value ?? object.feild

const updateElectronics=(req,res)=>{

const productId = parseInt(req.params.id);
const searchProduct = productsController.getAllElectronics().find(e=> e.id === productId);

const {name,price,category,stock}=req.body;

searchProduct.name = name ?? searchProduct.name;
searchProduct.price = price ?? searchProduct.price;
searchProduct.category = category ?? searchProduct.category;
searchProduct.stock = stock ?? searchProduct.stock;

res.json({message:'product updated successfully', data: searchProduct});


};

const updateClothing =(req,res)=>{
const ID = parseInt(req.params.id);

const productId = productsController.getAllClothing();

const searchId = productId.find(p=> p.id === ID); 

const{name, price, category, stock}= req.body;

searchId.name =name ?? searchId.name;
searchId.price =price ?? searchId.price;
searchId.category =category ?? searchId.category;
searchId.stock =stock ?? searchId.stock;

res.json({message:"product updated successfully", data: searchId});


};

const updateBooks =(req,res)=>{
const ID = parseInt(req.params.id);

const productId = productsController.getAllBooks();

const searchId = productId.find(p=> p.id === ID); 

const{name, price, category, stock}= req.body;

searchId.name =name ?? searchId.name;
searchId.price =price ?? searchId.price;
searchId.category =category ?? searchId.category;
searchId.stock =stock ?? searchId.stock;

res.json({message:"product updated successfully", data: searchId});


};

const updateBeauty =(req,res)=>{
const ID = parseInt(req.params.id);

const productId = productsController.getAllBeauty();

const searchId = productId.find(p=> p.id === ID); 

const{name, price, category, stock}= req.body;

searchId.name =name ?? searchId.name;
searchId.price =price ?? searchId.price;
searchId.category =category ?? searchId.category;
searchId.stock =stock ?? searchId.stock;

res.json({message:"product updated successfully", data: searchId});


};

const updateSports =(req,res)=>{
const ID = parseInt(req.params.id);

const productId = productsController.getAllSports();

const searchId = productId.find(p=> p.id === ID); 

const{name, price, category, stock}= req.body;

searchId.name =name ?? searchId.name;
searchId.price =price ?? searchId.price;
searchId.category =category ?? searchId.category;
searchId.stock =stock ?? searchId.stock;

res.json({message:"product updated successfully", data: searchId});


};




//delete requests for deleting products
const deleteBeautyProduct =(req,res)=>{
const ID = parseInt(req.params.id);

const searchId = productsController.getAllBeauty().find(p=> p.id ===ID);

productsController.getAllBeauty().splice(searchId,1);

res.status(201).json({message: 'Product removed successfully', data: searchId});


};

const deleteClothingProduct =(req,res)=>{
const ID = parseInt(req.params.id);

const searchId = productsController.getAllClothing().find(p=> p.id ===ID);

productsController.getAllClothing().splice(searchId,1);

res.status(201).json({message: 'Product removed successfully', data: searchId});


};const deleteElectronicsProduct =(req,res)=>{
const ID = parseInt(req.params.id);

const searchId = productsController.getAllElectronics().find(p=> p.id ===ID);

productsController.getAllElectronics().splice(searchId,1);

res.status(201).json({message: 'Product removed successfully', data: searchId});


};const deleteBooksProduct =(req,res)=>{
const ID = parseInt(req.params.id);

const searchId = productsController.getAllBooks().find(p=> p.id ===ID);

productsController.getAllBooks().splice(searchId,1);

res.status(201).json({message: 'Product removed successfully', data: searchId});


};const deleteSportsProduct =(req,res)=>{
const ID = parseInt(req.params.id);

const searchId = productsController.getAllSports().find(p=> p.id ===ID);

productsController.getAllSports().splice(searchId,1);

res.status(201).json({message: 'Product removed successfully', data: searchId});


};


module.exports ={
    getAllProducts,
    getAllElectronics,
    getAllClothing,
    getAllBooks,
    getAllBeauty,
    getAllSports,
    getProductsByID,
    getProductByMinPrice,
    getProductByMaxPrice,
    filterByStockStatus,
    getElectronicsById,
    getClothingById,
    getBooksById,
    getBeautyById,
    getSportsById,
    collaboration,
    addNewProduct, 
    addNewBeautyProduct,
    addNewClothingProduct,  
    addNewElectronicProduct,
    addNewSportsProduct,
    addNewBookProduct,
    updateElectronics,
    updateClothing,
    updateBooks,
    updateBeauty,
    updateSports,
    deleteBeautyProduct,
    deleteClothingProduct,
    deleteElectronicsProduct,
    deleteBooksProduct,
    deleteSportsProduct
};