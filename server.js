const express = require('express');
const app = express();
const port = process.env.PORT || 5000

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


app.listen(port, () => {
  console.log(`Server Started On Port ${port}`)
});