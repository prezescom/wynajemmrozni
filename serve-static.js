const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

// Serve static files from current directory
app.use(express.static(path.join(__dirname)));

// Serve index.html for root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Static server running at http://localhost:${PORT}`);
    console.log('Serving index.html and styles.css from current directory');
});