const express = require('express');
const cors = require('cors');
require('dotenv').config();

const paymentRoutes = require('./routes/payments');
const deployRoutes = require('./routes/deploy');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api', paymentRoutes);
app.use('/api', deployRoutes);

app.listen(3001, () => console.log("🚀 Backend running on port 3001"));
