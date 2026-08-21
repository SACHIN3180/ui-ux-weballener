const express = require('express');
const cors = require('cors');
require('dotenv').config();
const pool = require('./db');
const contactRoutes = require('./routes/contact');
const assistantRoutes = require('./routes/assistant');

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
}));
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Aller backend is running 🚀');
});

// test DB route
app.get('/api/test-db', async (req, res) => {
  try {
    const result = await pool.query('SELECT NOW()');
    res.json({ success: true, time: result.rows[0] });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.use('/api/contact', contactRoutes);
app.use('/api/assistant', assistantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});