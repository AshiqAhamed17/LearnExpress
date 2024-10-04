const express = require('express');
const app = express();
app.use(express.json());

let users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
];

// GET: Fetch all users
app.get('/users', (req, res) => {
    res.json(users);
});

// GET: Fetch a user by ID
app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// POST: Create a new user
app.post('/users', (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name
    };
    users.push(newUser);
    res.status(201).json({ message: 'User created', user: newUser });
});

// PUT: Update a user by ID
app.put('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);
    if (user) {
        user.name = req.body.name;
        res.json({ message: 'User updated', user: user });
    } else {
        res.status(404).json({ message: 'User not found' });
    }
});

// DELETE: Delete a user by ID
app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users = users.filter(user => user.id !== userId);
    res.json({ message: `User with ID ${userId} deleted` });
});

app.listen(3000, () => console.log('Server running on port 3000'));