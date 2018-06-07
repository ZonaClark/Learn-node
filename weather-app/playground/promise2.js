const request = require('request');

var geocodeAddress = (address) => {
  return new Promise((resolve, reject) => {
    var encodedAddress = encodeURIComponent(address);

    request({
      url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=AIzaSyDz0_6ZyCqqmwPnsVCnmN64snwkpL55QEU`,
      json: true
    }, (error, response, body) => {
      if(error) {
        // If error related with the server exists
        reject('Unable to connect to Google server.');
      } else if(body.status === 'ZERO_RESULTS') {
        // Handle system errors
        reject('Unable to find that address');
      } else if(body.status === 'OK') {
        resolve({
          address: body.results[0].formatted_address,
          latitude: body.results[0].geometry.location.lat,
          longitude: body.results[0].geometry.location.lng
        });
      }
    });
  });
};

geocodeAddress('22901').then((location) => {
  console.log(JSON.stringify(location, undefined, 2));
}, (errorMessage) => {
  console.log(errorMessage);
})