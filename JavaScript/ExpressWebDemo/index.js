const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><p>Welcome to my Express app!</p>');
});

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, JSON!' });
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
