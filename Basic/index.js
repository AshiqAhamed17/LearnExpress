const express = require('express');
const app = express();

app.use(express.json());

const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

// Handle GET request to fetch all users
app.get('/users', (req, res) => {
    res.json(users); // Send the list of users as JSON
});

app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    }
    users.push(newUser);
    res.status(201).json(newUser); // Send the newly created user as JSON
})

// Handle GET request to fetch a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.listen(3000, () => console.log('Server running on port 3000'));