const express = require('express');
const app = express();
app.use(express.json());
 
let productos = [
  { id: 1, nombre: "Producto A", precio: 25000 },
  { id: 2, nombre: "Producto B", precio: 40000 },
];

app.get('/productos', (req, res) => {
  res.json(productos);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});