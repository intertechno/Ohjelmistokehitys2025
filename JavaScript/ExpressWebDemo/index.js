const csv = require('csv-parser');
const { DatabaseSync } = require("node:sqlite");
const express = require('express');
const fs = require('fs');

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

app.get('/api/asiakkaat', (req, res) => {
    const database = new DatabaseSync("northwind.db");

    const query = database.prepare("SELECT * FROM Customers");
    const tulokset = query.all();
    database.close();

    res.json(tulokset);
    
    /*
    const results = [];

    database.prepare("SELECT * FROM Customers").all((err, rows) => {
        if (err) {
            res.status(500).json({ error: 'Internal Server Error' });
            return;
        }
        res.json(rows);
    });
    */
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
