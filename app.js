const express = require('express');
const fs = require('fs');

const app = express();
const port = 8080; 

//connect routes to their pages
let index = fs.readFileSync('index.html');
let about = fs.readFileSync('about.html');
let contact = fs.readFileSync('contact-me.html');
let notFound = fs.readFileSync('404.html');

app.get('/', (req, res) => res.redirect('/index'));
app.get('/index', (req, res) => res.end(index));
app.get('/about', (req, res) => res.end(about));
app.get('/contact-me', (req, res) => res.end(contact));
app.get('/*', (req, res) => res.end(notFound));

app.listen(port, () => console.log(`Server listening on http://localhost:${port}`));