const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Database connection
const db = mysql.createConnection({
  host: "localhost",   // this is where your MySQL runs (via XAMPP)
  user: "root",        // XAMPP default user
  password: "",        // leave blank (default in XAMPP)
  database: "crop_rotation", // the one you created in phpMyAdmin
});

db.connect((err) => {
  if (err) {
    console.log("❌ Database connection failed:", err);
    return;
  }
  console.log("✅ MySQL Connected Successfully!");
});

// Signup route (when a new user registers)
app.post("/signup", (req, res) => {
  const { fullname, email, password } = req.body;

  if (!fullname || !email || !password) {
    return res.status(400).send("Please fill in all fields");
  }

  // Encrypt the password before saving
  const hashedPassword = bcrypt.hashSync(password, 8);

  const sql = "INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)";
  db.query(sql, [fullname, email, hashedPassword], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error during signup");
    }
    res.send("✅ Signup successful!");
  });
});

// Login route
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const sql = "SELECT * FROM users WHERE email = ?";
  db.query(sql, [email], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Server error");
    }

    if (results.length === 0) {
      return res.status(404).send("User not found");
    }

    const user = results[0];
    const passwordIsValid = bcrypt.compareSync(password, user.password);

    if (!passwordIsValid) {
      return res.status(401).send("Invalid password");
    }

    res.send("✅ Login successful!");
  });
});

// Start the server
app.listen(3000, () => {
  console.log("🚀 Server running at http://localhost:3000");
});
