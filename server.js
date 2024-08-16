const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files (your HTML and CSS)
app.use(express.static('public'));

// Handle registration
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;

    // Here, you would typically save the user to a database.
    console.log('User registered:', { username, email, password });
    
    // Send a response
    res.send('Registration successful!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});