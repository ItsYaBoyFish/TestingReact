const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');

app.get('/customers', (req, res) => {
  var customers = [
    {Name: 'Austin'},
    {Name: 'Scott'},
    {Name: 'Joel'},
    {Name: 'Max'},
  ];
  res.send({
    Success: 'Yay',
    Customers: customers
  })
});

app.use(express.static(path.join(__dirname, 'client')));


app.listen(port, () => {
  console.log(`Server Started On Port ${port}`)
});