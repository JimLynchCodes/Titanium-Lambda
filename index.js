// 'use strict';

// const awsServerlessExpress = require('aws-serverless-express')
// const app = require('./app')
// const server = awsServerlessExpress.createServer(app)

const StarWarsFunctions = require('./src/StarWarsFunctions');
const swf = new StarWarsFunctions();

exports.handler = (event, context) => {

  console.log('event: ', event);
  console.log('context: ', context);
  return swf.buildFinalResponse();
}
