const express = require('express');
const fetch = require('node-fetch'); // For making HTTP requests
const app = express();

// Define routes
app.get('/cart', async (req, res) => {
    try {
        const response = await fetch('http://service-cart:80');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data from /cart');
    }
});

app.get('/user', async (req, res) => {
    try {
        const response = await fetch('http://service-user:80');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data from /user');
    }
});

app.get('/checkout', async (req, res) => {
    try {
        const response = await fetch('http://service-checkout:80');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data from /checkout');
    }
});

app.get('/product', async (req, res) => {
    try {
        const response = await fetch('http://service-product:80');
        const data = await response.json();
        res.json(data);
    } catch (error) {
        res.status(500).send('Error fetching data from /product');
    }
});

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
