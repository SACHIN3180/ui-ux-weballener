CREATE TABLE contact_submissions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(150) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(150),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE assistant_conversations (
  id SERIAL PRIMARY KEY,
  visitor_id VARCHAR(100),
  started_at TIMESTAMP DEFAULT NOW()
);

CREATE TABLE assistant_messages (
  id SERIAL PRIMARY KEY,
  conversation_id INTEGER REFERENCES assistant_conversations(id) ON DELETE CASCADE,
  sender VARCHAR(10) NOT NULL CHECK (sender IN ('user', 'bot')),
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT NOW()
);