import { createServer } from 'node:http';
import fs from 'node:fs';

const hostname = 'localhost';
const port = 8080;

const server = createServer((req, res) => {
  const url = req.url;

  res.setHeader('Content-Type', 'text/html');

  if (url === '/') {
    res.writeHead(200);
    fs.readFile('./index.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      } 
      res.end(data);
    });
  } else if (url === '/about') {
    res.writeHead(200);
    fs.readFile('./about.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      } 
      res.end(data);
    });
  } else if (url === '/contact') {
    res.writeHead(200);
    fs.readFile('./contact-me.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      } 
      res.end(data);
    });
  } else {
    res.writeHead(404);
    fs.readFile('./404.html', 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        return;
      } 
      res.end(data);
    });
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
