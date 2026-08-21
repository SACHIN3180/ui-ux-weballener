const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

pool.on('error', (err) => {
  console.error('❌ Unexpected DB error:', err.message);
});

pool.query('SELECT NOW()')
  .then(() => console.log('✅ Connected to PostgreSQL (Neon)'))
  .catch(err => console.error('❌ Database connection error:', err.message));

module.exports = pool;