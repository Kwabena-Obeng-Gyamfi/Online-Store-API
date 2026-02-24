const express = require('express');
const app = express();
const http = require('http');

const productsRoutes = require('./routes/productsRoutes');

const server = http.createServer(app);

app.use(express.json());
app.use('/api', productsRoutes);


const PORT = process.env.PORT || 8000;
server.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
});