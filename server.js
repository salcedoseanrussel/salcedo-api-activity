<<<<<<< HEAD
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/config/db');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Import Routes
const authRoutes = require('./src/routes/authRoutes');
const apiRoutes = require('./src/routes/apiRoutes');

// Mount routes
app.use(`${BASE_URI}/auth`, authRoutes);       // /api/v1/auth/register & /api/v1/auth/login
app.use(BASE_URI, apiRoutes);                  // /api/v1/transactions and /api/v1/users

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
=======
// server. js
require('dotenv').config();
const express = require('express' );
const connectDB = require('./src/config/db');
const app = express( );
connectDB();

// Middleware
app.use(express.json());

// Load Config
const PORT = process. env.PORT || 3000;
const BASE_URI = process.env.BASE_URI || '/api/v1';

// Import Routes (We will create this later)
const apiRoutes = require('./src/routes/apiRoutes');
app.use(BASE_URI, apiRoutes);
app.use(process.env.BASE_URI, apiRoutes);

app.listen(PORT, () => {
console.log( 'Server running on port ${PORT}');
console.log(`Base URI: http://localhost:${PORT}${BASE_URI}`);
>>>>>>> 825265ba21dab3e1608cbd7d7e1cb52fb4320362
});