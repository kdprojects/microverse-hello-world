import express from 'express';
import path from 'path';

const app = express();
const port = process.env.PORT || 8080;

// sendFile will go here
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(port);
console.log(`Server started at http://localhost:${port}`);