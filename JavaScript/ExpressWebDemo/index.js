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
    // throw new Error("Testi virheestä");
    res.json({ message: 'Hello, JSON!' });
});

app.get('/api/henkilot', (req, res) => {
    const results = [];

    fs.createReadStream('Henkilöt.csv')
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            throw new Error("Testi virheestä");
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

app.get('/api/asiakkaatMaittain/:country', (req, res) => {
    const country = req.params.country;
    const database = new DatabaseSync("northwind.db");

    throw new Error("Testi virheestä");

    // väärä ja vaarallinen tapa! SQL-injektio mahdollinen
    // const query = database.prepare("SELECT * FROM Customers WHERE Country = '" + country + "'");

    const query = database.prepare("SELECT * FROM Customers WHERE Country = ?");
    const tulokset = query.all(country);
    database.close();

    res.json(tulokset);
});

app.get('/api/tilaukset/:customerId', (req, res) => {
    const customerId = req.params.customerId;
    const database = new DatabaseSync("northwind.db");

    const query = database.prepare("SELECT * FROM Orders WHERE CustomerID = ?");
    const tulokset = query.all(customerId);
    database.close();

    res.json(tulokset);
});

app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
});
