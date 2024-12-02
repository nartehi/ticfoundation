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
4. Merge develop branch to branch your_branch (git merge main)

