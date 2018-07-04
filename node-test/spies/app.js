var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // Check if the email already exists

  // Save the user to the db
  db.saveUser({
    email: email,
    password  // ES6 syntax: same as 'password: password' because the variable name and
              // the property name are the same.
  });
  // Send the welcome email
};

/*
Spies let you to swap out a real function to a testing utility. When the test
function gets called, you can create various assertions.
*/