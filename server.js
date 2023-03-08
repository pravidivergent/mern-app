const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

// Create user schema
const userSchema = new mongoose.Schema({
  email: String,
  password: String
});

// Create user model
const User = mongoose.model("User", userSchema);

// Login endpoint
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    // Check password
    if (password !== user.password) {
      return res.status(400).json({ message: "Invalid email or password" });
    }

    return res.json({ message: "Login successful" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Create a new product and save to the array
const products = [];

app.post("/products", async (req, res) => {
  try {
    const product = req.body;
    products.push(product);
    console.log(products);
    return res.status(201).send("Product created successfully");
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

// Get all products
app.get("/products", async (req, res) => {
  try {
    return res.json(products);
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.listen(4000, () => console.log("Server started"));
