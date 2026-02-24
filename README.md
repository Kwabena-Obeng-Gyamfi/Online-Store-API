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
