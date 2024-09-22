const express = require('express');
const app = express();

app.get('/search', (req, res) => {
    const {query , sort } = req.query;

    let users = ['Alice', 'Bob', 'Charlie', 'David'];
    if (query) {
        users = users.filter(user => user.toLowerCase().includes(query.toLowerCase()));
    }

    if(sort == "desc"){
        users = users.reverse();
    }
    res.send(users);
});

app.get('/products', (req, res) =>{
     const {category, minPrice, maxPrice, sortBy } = req.query;
     let items = [
        { name: 'MacBook M3 Pro', category: 'Electronics', price: 3499 },
        { name: 'LV-shirt', category: 'Clothing', price: 500 },
        { name: 'i-phone 16', category: 'Electronics', price: 999 },
        { name: 'Gucci', category: 'Clothing', price: 600 }
    ];
    if(category){
        items = items.filter(item => item.category === category);
    }
    if(minPrice){
        items = items.filter(item => item.price >= parseFloat(minPrice))
    }
    if(maxPrice){
        items = items.filter(item => item.price <= parseFloat(maxPrice));
    }
    if (sortBy === 'priceAsc') {
        items = items.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'priceDesc') {
        items = items.sort((a, b) => b.price - a.price);
    }

    res.send(items);
});

app.listen((3000), () => {
    console.log('Server running on port 3000');
});