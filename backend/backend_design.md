# Nigerian Food Menu Search API - Design Documentation

This document outlines the design and specification for the Backend Search API for the Recipe Finder application.

## Tech Stack
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database/Storage**: Local JSON database (`recipes.json`) for initial development, structured to be easily migrated to MongoDB or PostgreSQL later.
- **Port**: `http://localhost:5000` (Frontend runs on `http://localhost:5173` or similar, proxy configured via Vite).

---

## 1. Data Schema (Recipe Model)
Each recipe in the database will follow this structure:

```json
{
  "id": "jollof-rice",
  "name": "Nigerian Jollof Rice",
  "description": "A classic West African rice dish cooked in a flavorful, spicy tomato and bell pepper broth.",
  "category": "Main Course",
  "difficulty": "Medium",
  "prepTime": 15,
  "cookTime": 45,
  "totalTime": 60,
  "image": "/images/jollof.jpg",
  "ingredients": [
    "3 cups long-grain parboiled rice",
    "5 medium tomatoes",
    "3 red bell peppers (tatashe)",
    "2 habanero peppers (atarodo)",
    "2 medium onions",
    "1/2 cup vegetable oil",
    "3 tablespoons tomato paste",
    "4 cups chicken broth",
    "1 tablespoon curry powder",
    "1 teaspoon dried thyme",
    "3 bay leaves",
    "Salt and seasoning cubes to taste"
  ],
  "instructions": [
    "Blend the tomatoes, red bell peppers, habanero peppers, and one onion until smooth. Boil the mixture in a pot to reduce excess water.",
    "Slice the remaining onion. Heat the vegetable oil in a large pot and sauté the sliced onions for about 2 minutes.",
    "Add tomato paste and fry for 5 minutes, stirring continuously to avoid burning.",
    "Add the boiled tomato-pepper blend and cook for another 10 minutes until oil separates.",
    "Stir in the curry, thyme, bay leaves, salt, and seasoning cubes. Pour in the chicken broth and bring to a boil.",
    "Wash the rice thoroughly and add it to the boiling pot. Stir gently, cover tightly with foil and a lid.",
    "Cook on low heat for 30 minutes until the rice is tender and has absorbed the broth. Serve hot."
  ],
  "dietaryTags": ["Gluten-Free", "Vegetarian-Option"],
  "region": "West"
}
```

---

## 2. API Endpoints

### A. Search & Filter Recipes
* **Endpoint**: `GET /api/recipes/search`
* **Query Parameters**:
  * `q` (string, optional): Text search query matching `name`, `description`, or `ingredients`.
  * `category` (string, optional): Filter by category (e.g., `Main Course`, `Soup/Stew`, `Breakfast`, `Snack`).
  * `maxTime` (integer, optional): Maximum total cooking time in minutes.
  * `region` (string, optional): Filter by Nigerian region of origin (e.g., `West`, `East`, `North`, `South`).
* **Example Request**:
  `GET /api/recipes/search?q=rice&category=Main Course`
* **Example Response (Success - 200 OK)**:
  ```json
  {
    "status": "success",
    "count": 1,
    "data": [
      {
        "id": "jollof-rice",
        "name": "Nigerian Jollof Rice",
        ...
      }
    ]
  }
  ```

### B. Get All Recipes
* **Endpoint**: `GET /api/recipes`
* **Example Response (Success - 200 OK)**:
  Returns all available recipes in the database.

### C. Get Recipe By ID
* **Endpoint**: `GET /api/recipes/:id`
* **Example Response (Success - 200 OK)**:
  Returns the recipe matching the ID. Returns `404 Not Found` if the recipe doesn't exist.

---

## 3. Initial Dataset (Nigerian Menu)
We will pre-populate our database (`recipes.json`) with the following signature dishes:
1. **Nigerian Jollof Rice** (Main Course - West)
2. **Egusi Soup with Pounded Yam** (Soup/Stew - East/West/South)
3. **Beef Suya** (Snack/Appetizer - North)
4. **Akara (Bean Cakes)** (Breakfast/Snack - National)
5. **Efo Riro (Yoruba Spinach Stew)** (Soup/Stew - West)
6. **Goat Meat Pepper Soup** (Soup/Appetizer - National)
