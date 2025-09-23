const csv = require('csv-parser')
const express = require('express');
const fs = require('fs')

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1><p>Welcome to my Express app!</p>');
});

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello, JSON!' });
});

app.get('/api/henkilot', (req, res) => {
    const results = [];

    fs.createReadStream('Henkilöt.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            res.json(results);
        });
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
