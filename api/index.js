const express = require('express');
const cors = require('cors');
const app = express();
const userRoutes = require('./routes/userRoutes');
const documentRoutes = require('./routes/documentRoutes');

app.use(cors());

app.use(express.json());

app.use('/users', userRoutes);
app.use('/users', documentRoutes);

app.listen(3001, () => {
  console.log('Server running on http://localhost:3001');
});
