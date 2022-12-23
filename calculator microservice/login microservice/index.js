const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD = 'password';

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    res.json({ status: 'success' });
  } else {
    res.json({ status: 'error' });
  }
});

app.listen(3000, () => {
  console.log('Admin login service listening on port 3000!');
});
