// Create web server that listens on port 3000.
// Create a route to handle GET requests to /comments.
// Read the comments.json file and send the contents to the client.

const express = require('express');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.get('/comments', (req, res) => {
    fs.readFile('comments.json', (err, data) => {
        if (err) {
            res.status(500).send('Error reading comments.json');
            return;
        }
        const comments = JSON.parse(data);
        res.send(comments);
    });
});

app.listen(PORT, () => {
    console.log(`Server is listening on http://localhost:${PORT}`);
});