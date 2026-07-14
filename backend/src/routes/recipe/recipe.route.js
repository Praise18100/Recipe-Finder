const express = require("express");
const { searchRecipes, getRecipeById } = require("../../controllers/recipe/recipe.controller");

const router = express.Router();

// Route: GET /api/recipes/search
router.get("/search", searchRecipes);

// Route: GET /api/recipes/:id
router.get("/:id", getRecipeById);

module.exports = router;
