1. Create an account on Render
2. Connect github to render
3. Serve the frontend `build` folder as we will not have `npm run dev` to serve the frontend files on heroku.
   1. Setting the static folder to the frontend `build` folder in `server.js`
   2. Load the index.html in that `build` folder to be served for any request (`'*'`) other than the backend routes we define.
      ```
      "scripts": {
         "start": "node backend/server.js",
         "server": "nodemon backend/server.js",
         "client": "npm start --prefix frontend",
         "dev" : "concurrently \"npm run server\" \"npm run client\""
      },
      ```
4. Configure below as the **Build Command** on render:
   1. `"npm install && npm install --prefix frontend && npm run build --prefix frontend"`
   2. This is to basically install all dependencies for the backend and frontend.
   3. Additionally `npm run build --prefix frontend` will build the static folder in the frontend.
5. Configure below as the **Start Command** on render:
   1. `npm start` this calls => `"start": "node backend/server.js"`

 ### Note:
 - `npm start` is used for development, providing a development server with features like hot reloading
 - `npm run build` is used to create a production-ready build of your application for deployment.