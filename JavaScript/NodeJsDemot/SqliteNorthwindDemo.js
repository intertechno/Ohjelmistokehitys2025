'use strict';
const { DatabaseSync } = require("node:sqlite");
const database = new DatabaseSync("northwind.db");

// Create a prepared statement to read data from the database.
const query = database.prepare("SELECT CompanyName FROM Customers WHERE Country = 'Finland'");

// Execute the prepared statement and log the result set.
console.log(query.all());
database.close();
