const express = require('express');
const path = require('path');

const app = express();

// heroku gives a dynamic port via the environment variable PORT
const port = process.env.PORT || 3000;

// current directory, go up a folder, enter the public dir
const publicPath = path.join(__dirname, '..', 'public');

// match all unmatched routes
app.get('/', (request, response) => {
  // respond with the path to index.html
  response.sendFile(path.join(publicPath, 'index.html'));
});

const server = app.listen(port, () => {
  console.log('server is up');
});

module.exports = server;