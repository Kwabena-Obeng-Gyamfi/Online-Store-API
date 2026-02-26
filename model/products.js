const products =[
{id:1, name:'Laptop', price:1200, category:'Electronics', stock:true},
{id:2, name:'Smartphone', price:800, category:'Electronics', stock:true},
{id:3, name:'Tablet', price:400, category:'Electronics', stock:false},
{id:4, name:'Headphones', price:150, category:'Electronics', stock:true },
{id:5, name:'Smart Watch', price:300, category:'Electronics', stock:false },
{id:6, name:'T-Shirt', price:25, category:'Clothing', stock:true},
{id:7, name:'Jeans', price:60, category:'Clothing', stock:false},
{id:8, name:'Jacket', price:100, category:'Clothing', stock:true},
{id:9, name:'Sneakers', price:80, category:'Clothing', stock:true},
{id:10, name:'Dress', price:75, category:'Clothing', stock:false},
{id:11, name:'The Great Gatsby', price:15, category:'Books', stock:true},
{id:12, name:'To Kill a Mockingbird', price:12, category:'Books', stock:false},
{id:13, name:'1984', price:10, category:'Books', stock:true},
{id:14, name:'Pride and Prejudice', price:8, category:'Books', stock:true},
{id:15, name:'The Catcher in the Rye', price:14, category:'Books', stock:false},
{id:16, name:'Basketball', price:25, category:'Sports', stock:true},
{id:17, name:'Soccer Ball', price:20, category:'Sports', stock:false},
{id:18, name:'Tennis Racket', price:40, category:'Sports', stock:true},
{id:19, name:'Yoga Mat', price:15, category:'Sports', stock:true},
{id:20, name:'Swimming Goggles', price:10, category:'Sports', stock:false},
{id:21, name:'Lipstick', price:15, category:'Beauty', stock:true},
{id:22, name:'Mascara', price:12, category:'Beauty', stock:false},
{id:23, name:'Foundation', price:25, category:'Beauty', stock:true},
{id:24, name:'Eyeshadow Palette', price:20, category:'Beauty', stock:true},
{id:25, name:'Nail Polish', price:8, category:'Beauty', stock:false}
];

const electronics=[
     {id:1, name:'Laptop', price:1200, category:'Electronics', stock:true},
      {id:2, name:'Smartphone', price:800, category:'Electronics', stock:true},
       {id:3, name:'Tablet', price:400, category:'Electronics', stock:false},
        {id:4, name:'Headphones', price:150, category:'Electronics', stock:true },
         {id:5, name:'Smart Watch', price:300, category:'Electronics', stock:false }
];

const clothing=[
     {id:1, name:'T-Shirt', price:25, category:'Clothing', stock:true},
      {id:2, name:'Jeans', price:60, category:'Clothing', stock:false},
       {id:3, name:'Jacket', price:100, category:'Clothing', stock:true},
        {id:4, name:'Sneakers', price:80, category:'Clothing', stock:true},
         {id:5, name:'Dress', price:75, category:'Clothing', stock:false}
];

const books=[
    {id:1, name:'The Great Gatsby', price:15, category:'Books', stock:true},
      {id:2, name:'To Kill a Mockingbird', price:12, category:'Books', stock:false},
       {id:3, name:'1984', price:10, category:'Books', stock:true},
        {id:4, name:'Pride and Prejudice', price:8, category:'Books', stock:true},
         {id:5, name:'The Catcher in the Rye', price:14, category:'Books', stock:false}
];

const sports=[
    {id:1, name:'Basketball', price:25, category:'Sports', stock:true},
      {id:2, name:'Soccer Ball', price:20, category:'Sports', stock:false},
       {id:3, name:'Tennis Racket', price:40, category:'Sports', stock:true},
        {id:4, name:'Yoga Mat', price:15, category:'Sports', stock:true},
         {id:5, name:'Swimming Goggles', price:10, category:'Sports', stock:false}
];

const beauty =[
    {id:1, name:'Lipstick', price:15, category:'Beauty', stock:true},
      {id:2, name:'Mascara', price:12, category:'Beauty', stock:false},
       {id:3, name:'Foundation', price:25, category:'Beauty', stock:true},
        {id:4, name:'Eyeshadow Palette', price:20, category:'Beauty', stock:true},
         {id:5, name:'Nail Polish', price:8, category:'Beauty', stock:false}
];

const getAllProducts =()=>{
    return products;
};

const getAllElectronics =()=>{
    return electronics;
};

const getAllClothing =()=>{
    return clothing;
};

const getAllBooks =()=>{
    return books;
};

const getAllSports =()=>{
    return sports;
};

const getAllBeauty =()=>{
    return beauty;
};

module.exports ={
    getAllProducts,
    getAllElectronics,
    getAllClothing,
    getAllBooks,
    getAllSports,
    getAllBeauty
};
