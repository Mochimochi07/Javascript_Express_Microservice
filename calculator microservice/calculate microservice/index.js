const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/calculate', (req, res) => {
  const { operator, operand1, operand2 } = req.body;
  let result;
  switch (operator) {
    case '+':
      result = operand1 + operand2;
      break;
    case '-':
      result = operand1 - operand2;
      break;
    case '*':
      result = operand1 * operand2;
      break;
    case '/':
      result = operand1 / operand2;
      break;
    default:
      result = null;
  }
  res.json({ result });
});

app.listen(3001, () => {
  console.log('Calculator service listening on port 3001!');
});
