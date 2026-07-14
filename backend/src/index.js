const express = require("express");
const cors = require("cors");
const recipeRoutes = require("./routes/recipe/recipe.route");

const app = express();
const PORT = 5000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Base Route
app.get("/", (req, res) => {
  res.send("Recipe Finder API is running...");
});

// Routes
app.use("/api/recipes", recipeRoutes);

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: "API Route not found",
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Unhandle Error:", err.stack);
  res.status(500).json({
    success: false,
    message: "Internal server error: " + err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Recipe Finder backend running on http://localhost:${PORT}`);
});
