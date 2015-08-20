var MongoClient = require('mongodb').MongoClient
  , request = require('request')
  , moment = require('moment');

MongoClient.connect('mongodb://localhost:27017/flickurator', function(err, db) {
    if(err) throw err;

    var options = {
      url: 'url',
      auth: {
        user: 'user',
        pass: process.env.PASS,
        sendImmediately: false
      }
    };

    request(options, function callback(error, response, body) {
      if (!error && response.statusCode == 200) {
        console.dir(body)
      }
    });
});
