const express = require('express');
const session = require('express-session');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Use the cookie-parser middleware to parse cookies
app.use(cookieParser());

// Set up the express-session middleware
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true,
  })
);

// Add the express.json() middleware to parse JSON data
app.use(express.json());

// Define the login endpoint
app.post('/api/login', (req, res) => {
  const { username, password } = req.body; // Destructure the username and password from the request body

  // Here, you can implement the login logic
  // For example, check the credentials against a database, and create a session if valid

  // For now, let's just log the received data to verify
  console.log('Received username:', username);
  console.log('Received password:', password);

  // Return a response indicating success
  res.json({ success: true, message: 'Login successful!' });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
