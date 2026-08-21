const express = require('express');
const router = express.Router();
const pool = require('../db');

// POST /api/contact — save a new submission
router.post('/', async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  // basic validation
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Invalid email format' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contact_submissions (name, email, phone, company, message)
       VALUES ($1, $2, $3, $4, $5) RETURNING *`,
      [name, email, phone || null, company || null, message]
    );
    res.status(201).json({ success: true, data: result.rows[0] });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

// GET /api/contact — list all submissions (for future admin use)
router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT * FROM contact_submissions ORDER BY created_at DESC`
    );
    res.json({ success: true, data: result.rows });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ success: false, error: 'Server error' });
  }
});

module.exports = router;