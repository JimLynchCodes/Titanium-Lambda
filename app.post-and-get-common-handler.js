const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware')
const encryptionManager = require('./src/utils/encryption-manager')
const MongoDbManager = require('./src/utils/mongo-db-manager')
const bodyParser = require('body-parser')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(awsServerlessExpressMiddleware.eventContext())

app.inputObjectOverride = {}

handleRequest = (args, res) => {

  /** TODO - Do some things with args here.
  *
  *  someHelperClass.doStuff(args).then( () => {
  *  ...
  */

  res.send({
    "hello": "world"
  })
 
}

app.get('/', (req, res) => {
  let args = app.inputObjectOverride
  if (req.apiGateway)
    args = req.apiGateway.event.queryStringParameters || req.apiGateway.event

  console.log('Handling User-Embed GET request on ' + process.env.Environment + ' with args: ', args)
  
  handleRequest(args, res)
})

app.post('/', (req, res) => {
  let args = app.inputObjectOverride
  if (req.apiGateway)
    args = req.body || req.apiGateway

  console.log('Handling User-Embed POST request on ' + process.env.Environment + ' with args: ', args)

  handleRequest(args, res)
})

module.exports = app
