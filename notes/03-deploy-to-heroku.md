1. Create an account on Heroku
2. Download and Install Heroku CLI
3. Run below to confirm version
   ```
   $ heroku --version
   heroku/8.10.0 win32-x64 node-v16.20.2
   ```
4. Serve the frontend `build` folder as we will not have `npm run dev` to serve the frontend files on heroku.
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
5. Create a heroku post build script that will run on heroku after we push the code to github.
   1. Initially we have to set `NPM_CONFIG_PRODUCTION` as `false` heroku cannot run the npm commands if it's production but it sets it back to `true` later.
      ```
      "scripts": {
         "start": "node backend/server.js",
         "server": "nodemon backend/server.js",
         "client": "npm start --prefix frontend",
         "dev" : "concurrently \"npm run server\" \"npm run client\""
         "heroku-postbuild": "NPM_CONFIG_PRODUCTION=false npm install --prefix && npm run build --prefix frontend"
      },
      ```
 ### Note:
 - `npm start` is used for development, providing a development server with features like hot reloading
 - `npm run build` is used to create a production-ready build of your application for deployment.
