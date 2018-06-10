const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


/*
 *  Use Middleware we can keep track of how the server is working.
 *  Calling 'next()' will tell express to move on to the next Middleware.
 */
app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log('Unable to append to server.log.');
    }
  });
  next();
});

/*
 *  Sometimes you don't want to use next() in Middleware.
 *  When the site is not in maintenance, you can comment it out.
 *  app.use will be called sequentially, so if you want the public directory to also 
 *  show maintenance page, move the line 'app.use(express.static(__dirname + '/public'));'
 *  below it.
 */
// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });



hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (text) => {
  return text.toUpperCase();
});

app.get('/', (req, res) => {
  // res.send('<h1>Hello Express!</h1>');
  res.render('home.hbs', {
    pageTitle: 'Home Page',
    message: 'Welcome!'
  })
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle.'
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});