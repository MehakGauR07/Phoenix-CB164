// index.js
const express = require('express');
const mysql = require('mysql');

const app = express();
const PORT = process.env.PORT || 3306;

// MySQL Connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'ak',
  password: 'Akanksh@01',
  database: 'bus_tracking',
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to Bus Tracking System API');
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
