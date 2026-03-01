# Online-Store-API
An API for an online store 
Online Store API (GET Requests Only)
📌 Project Overview

Build a simple REST API using Express that simulates an online store.

This project focuses only on GET requests.
You will test all endpoints using Postman.

The goal is to practice:

Routing

Route parameters

Query parameters

Filtering data

Returning proper JSON responses

Using correct HTTP status codes

📦 Data Requirements

Create three separate arrays to represent product categories:

Electronics

Clothing

Groceries

Each product object must contain:

id (number)

name (string)

price (number)

category (string)

inStock (boolean)

Each category should have at least 4 products.

🌐 API Endpoints
1️⃣ Get All Products

GET /products

Returns a combined array of all products from all categories.

Expected:

Status: 200

Response: JSON array of all products

2️⃣ Get Products by Category

GET /products/electronics
GET /products/clothing
GET /products/groceries

Each route should return only products from that category.

Expected:

Status: 200

Response: JSON array of products in that category

3️⃣ Get Product by ID

GET /products/:id

Search through all products

Return the product if found

Return an error message if not found

Test:

Existing ID

Non-existing ID

Expected:

Status: 200 if found

Status: 404 if not found

4️⃣ Filter by Minimum Price

GET /products?minPrice=500

Returns products with price greater than or equal to the given value.

Expected:

Status: 200

Response: Filtered array

5️⃣ Filter by Maximum Price

GET /products?maxPrice=100

Returns products with price less than or equal to the given value.

6️⃣ Filter by Stock Status

GET /products?inStock=true

Returns only products that match the stock status.

7️⃣ Combine Filters (Advanced Practice)

Test combinations like:

/products?minPrice=100&inStock=true

/products?maxPrice=50&inStock=false

Your API should handle multiple query parameters at the same time.

🧪 Testing

Use Postman to test:

All routes

Valid and invalid IDs

Query filters

Incorrect routes (should return 404)

----ADVANCED 
The 4 Core HTTP Methods (CRUD)

CRUD = Create, Read, Update, Delete

Operation	HTTP Method	What It Does
Create	POST	Add new product
Read	GET	Get products
Update	PUT / PATCH	Edit product
Delete	DELETE	Remove product

You already have:

✔ GET
✔ POST

Now you need:

👉 PUT / PATCH
👉 DELETE

🛠 1️⃣ UPDATE (PUT or PATCH)

Used to edit a product.

Example:

PUT /api/products/3
Example Code
router.put('/products/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const product = products.find(p => p.id === id);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    const { name, price, category, stock } = req.body;

    product.name = name ?? product.name;
    product.price = price ?? product.price;
    product.category = category ?? product.category;
    product.stock = stock ?? product.stock;

    res.json({ message: "Product updated", data: product });
});
PUT vs PATCH

PUT → Replace full object

PATCH → Update only some fields

Most APIs use PATCH for partial updates.

🗑 2️⃣ DELETE

Used to remove product.

DELETE /api/products/3
Example Code
router.delete('/products/:id', (req, res) => {

    const id = parseInt(req.params.id);
    const index = products.findIndex(p => p.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Product not found" });
    }

    products.splice(index, 1);

    res.json({ message: "Product deleted successfully" });
});
🧠 Now Your API Has Full CRUD

For products:

GET     /products
GET     /products/:id
POST    /products
PUT     /products/:id
DELETE  /products/:id

That’s a real REST API.

🛒 But This Is an ONLINE STORE

Products alone aren’t enough.

Here’s what a real store API needs:

🚀 Next Level Features
1️⃣ Categories Endpoint
GET /categories
GET /categories/:name/products
2️⃣ Users Endpoint
POST /users (register)
POST /login (authentication later)
GET /users/:id
3️⃣ Cart System
POST /cart
GET /cart/:userId
DELETE /cart/:itemId
4️⃣ Orders
POST /orders
GET /orders/:userId
5️⃣ Filtering & Searching

You already started this 👍

Better approach:

GET /products?stock=true&minPrice=500&category=Electronics

Instead of:

/products/true/500

Query parameters are cleaner.

🧱 Middleware You Should Add

As your API grows:

1️⃣ Validation middleware

Check required fields.

2️⃣ Error handling middleware

Centralize errors.

3️⃣ Logging middleware

See requests in console.
