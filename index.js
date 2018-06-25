'use strict';
/**
 *  @author Jim Lynch
 *
 *  The function "exports.handler" in an "index.js" file is the colloquial naming conventions for the main entry point
 *  to the lambda function. is the entry point for the lambda function.
 *
 *  In this example we are using the "awsServerlessExpress" library which makes things a little easier when exposing the
 *  lambda function via a REST endpoint. Note that this template can also be used for scheduled (cron job) events or
 *  one of the other many triggers you could set up as CloudWatch events.
 */
const awsServerlessExpress = require('aws-serverless-express')
const app = require('./app.sw-api-example.js')
const server = awsServerlessExpress.createServer(app)

exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context);
