## Setting Up MongoDB Atlas Database (Markdown)

This document outlines the steps to set up a MongoDB Atlas database for your project.

### Prerequisites

* MongoDB Atlas account (free tier available)
* MongoDB Compass ([https://www.mongodb.com/try/download/compass](https://www.mongodb.com/try/download/compass))

### Steps

1. **Sign Up or Log In:**
    * Visit [https://www.mongodb.com/](https://www.mongodb.com/) and create an account if you don't have one already.
    * Log in to your existing account.

2. **Create an Organization:**
    * Navigate to "Products" > "Other Tools" > "Compass."
    * Click "Create an Organization" and provide a name (e.g., "Traversal Media").
    * Click "Next."

3. **Create a Project:**
    * Click on "New Project" and provide a name (e.g., "Tutorials").
    * Click "Create Project."

4. **Create a Database:**
    * Click on "Build a Database."
    * Select the "Free" shared tier plan.
    * Choose a cloud provider (AWS recommended).
    * Customize the cluster name (optional).
    * Click "Create."

5. **Create a Database User:**
    * Click on "Add User."
    * Provide a username and password.
    * Select "Allow access from my current IP address."
    * Click "Finish & Close."

6. **Connect to the Database:**
    * Navigate to the "Clusters" section and locate your newly created cluster.
    * Click on "Connect."
    * Copy the connection string provided.

7. **Connect Using Compass:**
    * Open MongoDB Compass.
    * Paste the copied connection string into the connection field.
    * Replace `<username>` and `<password>` placeholders with your actual credentials.
    * Click "Connect."

8. **Verify Connection:**
    * You should see a connection established with "admin" and "local" databases.
    * You should also see your custom database (e.g., "support_desk_db") with any collections created (e.g., "users").