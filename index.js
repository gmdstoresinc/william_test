const express = require('express');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Successful response.');
});

app.use('/calculator', (req, res) => {
  console.log('Request type: ', req.method);
  console.log('Request body: ', req.body);

  res.status(200).json({'message': 'success'});
});

/**
 * This is a simply multiply operation
 * Accept 2 inputs and return with result
 */
app.use('/multiply', (req, res) => {
  console.log('Request type: ', req.method);
  console.log('Request body: ', req.body);

  const {num1, num2} = req.body;
  const result = num1 * num2;

  res.status(200).json({'message': `Multiply of: ${num1}, ${num2}`, 'result': result});
});

/**
 * This is a simply divide operation
 * Accept 2 inputs and return with result
 */
app.use('/divide', (req, res) => {
  console.log('Request type: ', req.method);
  console.log('Request body: ', req.body);

  const {num1, num2} = req.body;

  if (num2 === 0) {
    return res.status(500).json({'message': `num2 Cannot be 0`});
  }
  
  const result = num1 / num2;

  res.status(200).json({'message': `Divide of: ${num1}, ${num2}`, 'result': result});
});

app.listen(3000, () => console.log('Example app is listening on port 3000.'));