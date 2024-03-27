# Building a Support Ticket App with MERN Stack

In this project, we'll be developing a Support Ticket App using the MERN (MongoDB, Express.js, React.js, Node.js) stack. We'll start with the backend functionality, which includes setting up an API with endpoints for user registration, login, and authentication using JSON Web Tokens (JWT).

## Setting Up the Backend

### Project Structure
- Create a new directory for your project, e.g., `support-desk`.
- Inside the project directory, create a `backend` folder for the backend code.
- We'll have a `server.js` file in the `backend` folder, which will serve as the entry point for our backend.

### Initializing the Project
- Run `npm init` in the project root to create a `package.json` file. Fill in the necessary details, such as description, author, and license.
- Add a start script in `package.json` to run the server: `"start": "node backend/server.js"`.

### Installing Dependencies
- Install Express, dotenv, Mongoose, and other required packages:
  ```bash
  npm install express dotenv mongoose colors bcryptjs
  ```
- Install `nodemon` as a dev dependency to watch for changes and automatically restart the server:
  ```bash
  npm install --save-dev nodemon
  ```
- Add a script in `package.json` to run the server with `nodemon`: `"server": "nodemon backend/server.js"`.

### Setting Up Git
- Initialize a Git repository in the project root: `git init`.
- Create a `.gitignore` file and add `node_modules` and `.env` to ignore files.

### Project Initialization Summary
- **Project Directory Structure:**
  ```
  support-desk/
  ├── backend/
  │   └── server.js
  ├── node_modules/
  ├── package.json
  ├── package-lock.json
  └── .gitignore
  ```
- **Backend Setup:**
  - Created a `server.js` file in the `backend` folder as the entry point.
  - Initialized a `package.json` file with necessary project details and start script.
  - Installed required dependencies including Express, dotenv, Mongoose, bcryptjs, and nodemon.
  - Added a start script to run the server using nodemon.

## Next Steps
- In the next video, we'll start working on our Express server to implement the API endpoints for user registration and login.
- We'll also set up the MongoDB database using Mongoose to store user information securely.