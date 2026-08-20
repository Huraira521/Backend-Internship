# Task 2 - Recipe CRUD API

A simple REST API for managing recipes using Node.js and Express.js.

This project was created as part of my MERN Stack Backend Internship.

The recipes are stored in memory using a JavaScript array. Therefore, all recipe data will be lost when the server is restarted.

## Tech Stack

- Node.js
- Express.js
- Morgan

## Features

- Create a recipe
- Get all recipes
- Get a single recipe by ID
- Update a recipe
- Delete a recipe
- Basic request logging
- Basic input validation
- Proper HTTP status codes

## Installation

Clone the repository:

```bash
git clone https://github.com/Huraira521/Backend-Internship.git
```

Go to the Task 2 directory:

```bash
cd Backend-Internship/Task2
```

Install dependencies:

```bash
npm install
```

## Running the Server

Start the server:

```bash
npm start
```

The server will run at:

```text
http://localhost:3000
```

## API Endpoints

### 1. Create Recipe

**POST** `/recipes`

Example request:

```json
{
  "name": "Pasta",
  "description": "An Italian dish",
  "category": "Italian",
  "prepTime": 30,
  "cookTime": 60,
  "difficulty": "easy"
}
```

Success response:

```text
201 Created
```

### 2. Get All Recipes

**GET** `/recipes`

Returns all recipes stored in memory.

Success response:

```text
200 OK
```

### 3. Get Recipe By ID

**GET** `/recipes/:id`

Example:

```text
GET /recipes/1786906338523
```

Success response:

```text
200 OK
```

If the recipe does not exist:

```text
404 Not Found
```

Response:

```json
{
  "message": "Recipe not found"
}
```

### 4. Update Recipe

**PUT** `/recipes/:id`

Example:

```text
PUT /recipes/1786906338523
```

Example request body:

```json
{
  "name": "Pasta",
  "description": "An Italian dish",
  "category": "Italian",
  "prepTime": 30,
  "cookTime": 60,
  "difficulty": "medium"
}
```

Success response:

```text
200 OK
```

If the recipe does not exist:

```text
404 Not Found
```

### 5. Delete Recipe

**DELETE** `/recipes/:id`

Example:

```text
DELETE /recipes/1786906338523
```

Success response:

```text
200 OK
```

Response:

```json
{
  "message": "Recipe deleted successfully"
}
```

If the recipe does not exist:

```text
404 Not Found
```

## Validation

The API validates the recipe data before creating or updating a recipe.

The following fields are required:

- name
- description
- category
- prepTime
- cookTime
- difficulty

`prepTime` and `cookTime` must be positive numbers.

`difficulty` must be one of:

```text
easy
medium
hard
```

Invalid data returns:

```text
400 Bad Request
```

## Request Logging

Morgan is used for basic HTTP request logging.

Example console output:

```text
POST /recipes 201 4.123 ms
GET /recipes 200 1.456 ms
GET /recipes/123 200 1.234 ms
```

## Project Structure

```text
Task2/
│
├── src/
│   ├── data/
│   │   └── recipes.js
│   │
│   ├── middleware/
│   │   └── validateRecipe.js
│   │
│   └── server.js
│
├── package.json
├── package-lock.json
├── README.md
└── Task2-RecipeAPI.postman_collection.json
```

## Testing

All API endpoints were tested using Postman.

The exported Postman collection is included in this Task2 folder.

## Author

Abu Huraira