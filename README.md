# TiC Foundation

## Overview

TiC Foundation is a non-profit website aimed at providing underprivileged young students in rural towns of Ghana with resources to learn basic computer skills. This React-based platform serves as a hub for educational materials, interactive lessons, and community support to bridge the digital divide and empower students for a better future.

## Features

- **Interactive Learning Modules:** Engaging modules covering fundamental computer skills.
- **Resource Library:** Curated resources, tutorials, and articles to support learning.
- **Community Forum:** A platform for students to interact, ask questions, and share experiences.
- **Progress Tracking:** Track individual students progress and achievements.

## Tech Stack

- **React:** Frontend framework for building the user interface.
- **Postgres:** DB for Backend
- **Java:** Spring boot

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) 
- [JAVA](https://www.oracle.com/java/technologies/downloads/) - Select your system and download accordily


### Contributing To UI

1. Clone the repository:
   ```bash
   https://github.com/nartehi/ticfoundation.git

2. Create a branch before start developing:
   ```bash
   git branch issue_number
   
   e.g issue1-datePicker

3. Change directory into app-ui:
    ```bash
   cd app-ui
   
3. Install npm:
    ```bash
   npm i or npm install
    Please only run this when you are prompted to otherwise do not run it

4. Starts the development server:
    ```bash
    npm start  or npm run-script start  

#### Please do not execute steps 5,6,7,8 and 9

5. Start the test runner:
    ```bash
    npm test

6. To create a production build:
    ```bash
    npm run build.

7. Removes this tool and copies build dependencies, configuration files
    and scripts into the app directory. If you do this, you can’t go back!
    ```bash
    npm run eject

8. Bundles the app into static files for production.
    ```bash
    npm run build
    
9. If you have issues with build, install the following fonts:
    ```bash
    npm install --save @fortawesome/fontawesome-svg-core
    npm install --save @fortawesome/free-solid-svg-icons
    npm install --save @fortawesome/free-brands-svg-icons
    npm install --save @fortawesome/react-fontawesome
    npm install react-scroll
    npm install react-router-dom
    npm install react-router-dom

    
### To See Latest Changes From Develop branch in your branch

#### Steps:
1. Checkout main branch (git checkout main)
2. Get the latest of main branch (git pull)
3. Checkout branch your_branch (git checkout your_branch)
4. Merge main branch to branch your_branch (git merge main)



# Backend with Spring Boot,PostgreSQL db and Swagger UI

### Introduction

This project is a Spring Boot application using PostgreSQL as the database and Swagger UI for API testing and documentation.

### Features

CRUD operations with PostgreSQL

### RESTful APIs

Swagger UI for API testing and documentation

Layered architecture (Controller, Service, Repository)

#### Prerequisites

Ensure you have the following installed on your system:

Java 11 or higher

Maven

PostgreSQL

### Getting Started

Configure PostgreSQL Database using the following details

 Downlod [PostgreSQL](https://www.postgresql.org/download/)
 Download [pgAdmin 4](https://www.pgadmin.org/download/) PostgreSQL ui for interacting with PostgreSQL Database

1. Build the Project

Use Maven to build the project:

mvn clean install

2. Run the Application

The application will start on http://localhost:3900.

#### API Documentation with Swagger

Once the application is running, you can access the Swagger UI at:

http://localhost:3900/swagger-ui/4.15.5/index.html?continue=#/user-controller

Swagger UI allows you to:

Explore and test the APIs.

View detailed API documentation.

#### Example Endpoints

GET /api/users - Retrieve all users.

POST /api/resource - Create a new resource.

PUT /api/resource/{id} - Update a resource by ID.

DELETE /api/resource/{id} - Delete a resource by ID.

#### Project Structure

src/main/java
├── com.example.project
   ├── controller
   ├── service
   ├── repository
   └── domain

Controller: Handles HTTP requests.

Service: Business logic.

Repository: Interacts with the PostgreSQL database.

Domain: Represents the database entities.

#### Dependencies

The project uses the following dependencies:

Spring Boot Starter Data JPA

Spring Boot Starter Web

PostgreSQL Driver

Springdoc OpenAPI (for Swagger UI)

Testing the APIs

Use Swagger UI or tools like Postman to test the APIs. Example:

Test retrieving all resources with GET /api/resource.

Verify database updates after creating, updating, or deleting resources.

Contributing Guide

The TiC Foundation and I welcome your contributions! Follow the steps below to get started:

### Make Changes

Make your changes to the codebase. Ensure your changes follow the project coding standards and include relevant documentation or comments.

### Test Your Changes

Run the application and test your changes locally. Ensure existing functionality is not broken.

####  Commit and Push Changes

git add .
git commit -m "Description of your changes"
git push origin feature/your-feature-name

#### Create a Pull Request

Go to the original repository on GitHub and click on "Pull Requests." Click "New Pull Request" and select your branch. Provide a clear description of your changes and submit the pull request.

####  Address Feedback

Participate in the review process and make any requested changes. Once approved, your changes will be merged into the main branch.

Contribution Guidelines

Follow the project's code style and structure.

Write clear and concise commit messages.

Include relevant documentation or comments for your code.

Ensure all tests pass before submitting a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

Spring Boot Documentation

PostgreSQL Documentation

Springdoc OpenAPI Documentation


