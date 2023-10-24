const express = require('express');
const app = express();

const workingHoursMiddleware = (req, res, next) => {
  const currentDay = new Date().getDay(); 
  const currentHour = new Date().getHours();

  if (currentDay >= 1 && currentDay <= 5 && currentHour >= 9 && currentHour < 17) {
    next();
  } else {
    res.status(403).send('The web application is only available during working hours (Monday to Friday, from 9 to 17).');
  }
};

app.use(express.static('public'));
app.use(workingHoursMiddleware);

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Home Page</title>
      <link rel="stylesheet" type="text/css" href="/styles/styles.css">
    </head>
    <body>
      <header>
        <h1>Home Page</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>
      <div class="container">
        <p>Welcome to our Home Page content.</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/services', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Our Services</title>
      <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
      <header>
        <h1>Our Services</h1>
        <nav>
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>
      <div class="container">
        <p>Explore our services here.</p>
      </div>
    </body>
    </html>
  `);
});

app.get('/contact', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Contact Us</title>
      <link rel="stylesheet" type="text/css" href="Styles.css">
    </head>
    <body>
      <header>
        <h1>Contact Us</h1>
        <nav class="navbarContent">
          <a href="/">Home</a>
          <a href="/services">Our Services</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>
      <div class="container">
        <p>Get in touch with us.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
