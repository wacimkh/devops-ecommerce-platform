const express = require('express');
const app = express();

app.use(express.json());

// Route de santé — utilisée par Kubernetes pour vérifier que l'app tourne
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Route de test
app.get('/api/products', (req, res) => {
  res.json([
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 499 },
    { id: 3, name: 'Tablet', price: 299 },
  ]);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
