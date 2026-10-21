# Task 3 - Recipe API with MongoDB

This task updates the Recipe CRUD API from Task 2 to use MongoDB for permanent data storage.

## Features

- Create a recipe
- Get all recipes
- Get a recipe by ID
- Update a recipe
- Delete a recipe
- Request validation
- MongoDB database
- Environment variables for database credentials
- Request logging using Morgan

## Technologies

- Node.js
- Express.js
- MongoDB
- Mongoose
- Morgan
- dotenv

## Project Structure

```text
Task3/
├── .env
├── .gitignore
├── package.json
├── package-lock.json
└── src/
    ├── server.js
    ├── models/
    │   └── Recipe.js
    └── middleware/
        └── validateRecipe.js


        Installation
Install the dependencies:
npm install

Environment Variables
Create a .env file in the Task3 folder:
PORT=3000
MONGO_URI=your_mongodb_connection_string

Do not share or commit the .env file.
Run the Application
npm start

The server will run on:
http://localhost:3000

API Endpoints
Method	Endpoint	Description
POST	/recipes	Create a recipe
GET	/recipes	Get all recipes
GET	/recipes/:id	Get recipe by ID
PUT	/recipes/:id	Update a recipe
DELETE	/recipes/:id	Delete a recipe


Example Recipe
{
    "name": "Pasta",
    "description": "An Italian dish",
    "category": "Italian",
    "prepTime": 30,
    "cookTime": 60,
    "difficulty": "medium"
}

Database
MongoDB is used to permanently store recipe data.

Mongoose is used to define the Recipe schema and interact with MongoDB.