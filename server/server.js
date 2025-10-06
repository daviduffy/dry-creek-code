import express from 'express';
import secure from 'ssl-express-www';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// heroku gives a dynamic port via the environment variable PORT
const port = process.env.PORT || 3000;

// current directory, go up a folder, enter the public dir
const distPath = path.join(__dirname, '..', 'dist');

app.use(secure);
app.use(express.static(distPath));

// match all unmatched routes
app.get(/.*/, (request, response) => {
  // respond with the path to index.html
  response.sendFile(path.join(distPath, 'index.html'));
});

const server = app.listen(port, () => {
  console.log('server is up');
});

export default server;