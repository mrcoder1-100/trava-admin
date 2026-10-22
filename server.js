const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Serve Admin Portal at all main administrative routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({ status: 'OK', service: 'Trava Admin Console', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`====================================================`);
  console.log(` TRAVA SUPER ADMIN CONSOLE - RUNNING`);
  console.log(` Port:    http://localhost:${PORT}`);
  console.log(` Admin:   http://localhost:${PORT}/admin`);
  console.log(`====================================================`);
});
