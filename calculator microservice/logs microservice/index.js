const express = require('express');
const app = express();

const logs = [];

app.get('/logs', (req, res) => {
  res.json(logs);
});

app.listen(3002, () => {
  console.log('Logs service listening on port 3002!');
});
