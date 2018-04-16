'use strict';
/**
 *  @author Jim Lynch <jim@wisdomofjim.com>
 *
 *  The name of this file and object is exposes is "app". It is common in express.js examples to refer to the webserver
 *  being created as "app". This way we can handle our endpoints in a very similar way we do with non-servereless
 *  development.
 */
const express = require('express');
const app = express();
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const StarWarsFunctions = require('./src/star-wars-functions');
app.use(awsServerlessExpressMiddleware.eventContext())
app.starWarsFunctions = new StarWarsFunctions();

app.getHandler = function (req, res) {

  app.lambdaParams = {};

  if (req.apiGateway) {
    app.lambdaParams = Object.assign({}, app.lambdaParams, req.apiGateway.event)
  }

  if (req.query) {
    app.lambdaParams = Object.assign({}, app.lambdaParams, req.query)
  }

  res.set({
    'Content-Type': 'application/json',
    'charset': 'utf-8'
  });

  return app.starWarsFunctions.getCharacterData(app.lambdaParams.character).then(characterData => {
    res.send(characterData);
  }, err => {
    res.send(err);
  });

};

app.get('/', app.getHandler);

// Export the Express configuration so that it can be consumed by the Lambda handler.
module.exports = app;
