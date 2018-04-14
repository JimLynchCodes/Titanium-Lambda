'use strict';
var express = require('express');
var app = express();
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
app.use(awsServerlessExpressMiddleware.eventContext())

app.get('/', function(req, res) {

  console.log('got event!', req.events);

  console.log('ok then');
  console.log('req', req.apiGateway.event)

  res.send({
    "Output": "Hello World!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Hello World!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
