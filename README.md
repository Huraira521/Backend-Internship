# Backend Internship

A backend API project developed as part of a MERN Stack Backend Internship.

## Project Purpose

This project is the starting backend application for the internship. It demonstrates the basic backend development setup using Node.js and Express.js, along with Git, GitHub, and deployment.

The project currently provides a simple health-check API to verify that the backend server is running correctly.

## Live Deployment

The backend API is deployed on Vercel.

**Live URL:** https://backend-internship-delta.vercel.app

### Health Check

https://backend-internship-delta.vercel.app/health

## API Status

The `/health` endpoint returns the current API status and timestamp.

## Tech Stack

* Node.js
* Express.js
* Git
* GitHub

## Features

* Express.js backend server
* Health-check API
* Basic API endpoint
* Environment-based port configuration
* Git version control

## Prerequisites

Before running the project, make sure you have the following installed:

* Node.js
* npm
* Git

## Installation

Clone the repository:

```bash
git clone https://github.com/Huraira521/Backend-Internship.git
```

Navigate into the project directory:

```bash
cd Backend-Internship
```

Install the project dependencies:

```bash
npm install
```

## Running Locally

Start the development server:

```bash
npm start
```

The server will run on:

```text
http://localhost:3000
```

## API Endpoints

### Health Check

**GET** `/health`

Used to check whether the backend server is running.

Example request:

```text
GET http://localhost:3000/health
```

Example response:

```json
{
  "status": "ok",
  "timestamp": "2026-08-11T00:00:00.000Z"
}
```

### API Welcome

**GET** `/api`

Returns a basic welcome message.

Example request:

```text
GET http://localhost:3000/api
```

Example response:

```json
{
  "message": "Welcome to my backend api"
}
```

## Project Structure

```text
Backend-Internship/
│
├── src/
│   └── server.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Author

Abu Huraira
