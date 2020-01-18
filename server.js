const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/api/customers', (req, res) => {
  const Customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'David', lastName: 'Smith'},
    {id: 3, firstName: 'Tyler', lastName: 'Evans'}
  ];

  res.json(Customers);
})



app.listen(port, () => {
  console.log(`Server Started On Port: ${port}`)
})