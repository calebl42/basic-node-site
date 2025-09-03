import express from 'express';
const app = express();

const hostname = 'localhost';
const port = 8080;
const __dirname = import.meta.dirname;
const options = {
  root: __dirname,
}

app.get('/', (req, res) => {
  res.sendFile('index.html', options);
});
app.get('/about', (req, res) => {
  res.sendFile('about.html', options);
});
app.get('/contact', (req, res) => {
  res.sendFile('contact-me.html', options);
});
app.get('/*splat', (req, res) => {
  res.sendFile('404.html', options);
});
 
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
