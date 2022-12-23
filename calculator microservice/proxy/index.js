const express = require('express');
const http = require('http');
const app = express();

app.post('/login', (req, res) => {
  http.post('http://localhost:3000/login', req.body, response => {
    response.on('data', data => {
      res.send(data);
    });
  });
});

app.post('/calculate', (req, res) => {
  http.post('http://localhost:3001/calculate', req.body, response => {
    response.on('data', data => {
      logs.push(req.body);
      res.send(data);
    });
  });
});

app.get('/logs', (req, res) => {
  http.get('http://localhost:3002/logs', response => {
    response.on('data', data => {
      res.send(data);
    });
  });
});

app.listen(3003, () => {
  console.log('Proxy service listening on port 3003!');
});
