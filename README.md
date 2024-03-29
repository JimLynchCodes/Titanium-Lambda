# Titanium Lambda

_Titanium Lambda_ is philosophy, a set of guidelines, and some boilerplate code meant to inspire you to build stable, robust, and successful serverless REST APIs.
 
 <br/>
 <p align="center">
 <img src="./images/Titanium Lambda Logo.png" width="300"/>
</p>

<br/>

### Key Features of Titanium Lambda Projects: 
- Full CI / CD Pipeline with AWS CodePipeline or Travis CI.
- Has 4 different types of automated tests written with Mocha + Chai.
- Automated developer sugars like eslint, jsdoc, and git hooks.
- Incorporates Serverless Framework for an alternative quick, convenient deployment. 
- Solid disaster recovery strategies.
- Steps to perform regular load testing with Gatling.
- Example project, code, and template files to use as a template.
- Swagger / OpenAPI Documentation generator.
- Automated logs management.
- Automated "New Lambda" creation.

<br/>

## Quick Usage

clone this repo and go into it:
```
git clone git@github.com:JimTheMan/Titanium-Lambda.git
cd Titanium-Lambda
```

use node version 8.16 or newer:
```
nvm use
```

install dependencies:
```
npm i
```

run unit tests:
```
npm test
```

run end-to-end tests:
```
npm run e2e
```

Note: to run locallly and deploy you need the serverless framework installed locally:
```
npm i -g serverless
```

run lambda locally:
```
npx serverless offline start --port 5001 --stage local --env local
```

deploy:
```
npx serverless deploy
```

note: you will need to have to have configured aws creds in order to deploy:
```
aws configure
```

## Example Project
This project is an example of a project that follows the Titanium Lambda guidelines. This specific lambda function can be accessed as a REST API that you can call using a GET request with the query parameter, "character". The service will then return a json object containing some data about a star wars character corresponding to that number: their name, hair cookie, and eye color. 

Try hitting the live endpoint via putting it in your browser address bar, ajax, curl, postman, or some other REST client!  

https://y4ykxdoou7.execute-api.us-east-1.amazonaws.com/dev?character=1

_

You can change the value of the _character_ query paramter in the url to an integer between 1 and 10 (other numbers work, but it officially supports 1 through 10). The service then calls out to the [star wars api](https://swapi.co/), parses the result, and returns the character's name, eye color, and hair color.


## The Meta Project 
The Star Wars endpoint could be switched out for any asynchronous api (or series / combination of api calls / databates interactions / etc). This is a great example of how to make clean, thoroughly testsed Nodejs microserverices that are performant, efficient, and _actually_ do scale to any amount of traffic all on their own. Titanium Lambda is meant to be applicable to _any_ serverless project, the example files here are just one tangible manifestation of the teachings of Titanium Lambda.

## Why Titanium Lambda?
When it comes to working with AWS Lambda, there are't a lot of "enterprise level" tutorials. Many people learn the basics, upload some code right into the web console, and stop there thinking that's all there is to building Lambda functions; that they are some type of "cloud toy" rather than the enterprise-level dragon-layer that they are. It can be tough figuring out how to deploy efficiently, being disciplined enough to write all the various automated tests, and being aware of where to look when things go wrong. If you want to step up your serverless game and build robust, legit Lambda functions which work as expected then this guide is for you.


## What Are We Selling?
Nothing! Titanium Lambda is totally free to use and is not influenced by commercial interests. Titanium Lambda was a result of Jim Lynch working professionally with the tools, honing his skills, and over time formulating this guide as a way of organizing his thoughts and building somewhat of a "turnkey" development process for his own personal and professional lambda functions. Jim prides himself on being a very, "laid-back perfectionist", and this guide is meant to allow you to run a company or engineering department with many moving parts without being worried and fighting server fires all the time. When Jim discovers awesoem things that work for him he often shares them with the world, and he even created a blog called "Wisdom of Jim" (www.wisdomofjim.com) so that he could share his finding with he world! If you like this project or other things from, feel free to [tweet to Jim](https://twitter.com/WebWhizJim) and say hi! 👋 

## How To Use The Template Files

First, make sure you have the aws cli installed. Open up a linux shell and run:
aws --version

If you don't have it, you can check the docs here of do this:
`brew install awscli`

You'll need to set up the permissions that are specified in the template files. Specifically, in the template file "codebuild-config.json" change the value of ServiceRole to the arn of a role that you create in the aws console under cloudwatch -> roles. This role needs to have at permissions for basic lambda execution and any additions permissions that your function logic requires.


## The CodeStar Dashboard
There are various ways of starting your project, but Titanium Lambda recommends using [AWS CodeStar](https://aws.amazon.com/codestar/). CodeStar basically sets up CodePipeline for you, provisions some resources, and provides you with a nice dashboard for monitoring your project.

You can find the Codestar dashboard for this project[here](https://console.aws.amazon.com/codestar/home?region=us-east-1#/projects/jims-cepsnlm/dashboard). 
_(Note: You won't be able to acess the codestar dashboard unless specifically given permissions by Jim.)_

You will also need to set up two more permissions in AWS for the pipeline and deployment configuration. In the file "pipeline-config.json" change the pipeline `roleArn` and the Deploy configuration `RoleArn`. 

(Note: If you we don't have exact examples here or they become outdated, you can always use AWS Codestar to scaffold a new nodejs pipeline and lambda function. You can then see how those AWS permissions are set up are create similar ones).

## Using a CI / CD Pipeline
When you are just building a project and have no users you can shoot from the hip, use only one environment, and deploy whatever and whenever you want. However, once you launch (and if you are lucky enough to have some real users) then it becomes a more dangerous game. The stakes are higher and it becomes critical to not push bugs to the users yet keep the same rapid deployment pace. A great way to do this is to use a continuous integration pipeline that is connected to git. It will automatically pick up code when a push or merge occurs on a certain branch, run your tests, create a fresh build, and deploy to a dev environment. Then there should be some manual "big red button" to copy the dev environment build over to production. Since it is already tightly ingrained in the AWS ecosystem and works well with AWS Lambda, the Titanium Lambda official first choice for CI provider is AWS CodePipeline. However, the general guidelines of Titanium Lambda should be transferrable to any other CI platform, and it's more about how you use the pipeline rather than which one in particular you use. In an effort to prove that you can use more than just CodePipeline, the project also includes a configuration file for Travis CI (.travis.yml) in addition to the CI Pipeline config file (template.yml).


## The CodeStar Starter
There are various ways of starting your project, but Titanium Lambda recommends using [AWS CodeStar](https://aws.amazon.com/codestar/) which basically sets up CodePipeline for you, provisions some resources, and provides you with a nice dashboard for monitoring your project. Titanium Lambda is an ideaology outside of the specific syntax in the boilerplate code so if one day it gets too old and crusty to actually deploy then you can always just use copy all the files from a codestar scallfold and start applying the Titanium Lambda principles there.

## For Node.js And Beyond!
This example project is built around a NodeJS microservice. However, there is no reason to limit the teachings of Titanium Lambda to only NodeJS when they apply pretty much equally well serverless functions written in any language. Indeed, even if you are using AWS CodeStar to scaffold out a microservice for AWS Lambda, in addition to NodeJs you have the option to use other languages such as Python or Java.  

<img src="./images/CodeStar-Create-Lambda-Project-Screenshot.png" width="650" />

## UPDATE (Jan 2020): Even More Languages!
As of 2020 the serverless world has exploded, and you can find a way to deploy pretty much every modern language under the sun to run in a serverless environment. Just with the serverless cli "create" command alone, all these cloud provider / runtime combinations are supported!

- "aws-clojure-gradle"
- "aws-clojurescript-gradle"
- "aws-nodejs"
- "aws-nodejs-typescript"
- "aws-alexa-typescript"
- "aws-nodejs-ecma-script"
- "aws-python"
- "aws-python3"
- "aws-groovy-gradle"
- "aws-java-maven"
- "aws-java-gradle"
- "aws-kotlin-jvm-maven"
- "aws-kotlin-jvm-gradle"
- "aws-kotlin-nodejs-gradle"
- "aws-scala-sbt"
- "aws-csharp"
- "aws-fsharp"
- "aws-go"
- "aws-go-dep"
- "aws-go-mod"
- "aws-ruby"
- "aws-provided"
- "tencent-go"
- "tencent-nodejs"
- "tencent-python"
- "tencent-php"
- "azure-nodejs"
- "azure-python"
- "cloudflare-workers"
- "cloudflare-workers-enterprise"
- "cloudflare-workers-rust"
- "fn-nodejs"
- "fn-go"
- "google-nodejs" 
- "google-python"
- "google-go""kubeless-python"
- "kubeless-nodejs"
- "knative-docker"
- "openwhisk-java-maven"
- "openwhisk-nodejs"
- "openwhisk-php"
- "openwhisk-python"
- "openwhisk-ruby"
- "openwhisk-swift"
- "spotinst-nodejs"
- "spotinst-python"
- "spotinst-ruby"
- "spotinst-java8"
- "twilio-nodejs"
- "aliyun-nodejs"


## UPDATE (Jan 2020): Titanium Lambda All The Things?!
Serverless technology has been applied to virtually every area of computing, and these days you can build almost anything you can imagine without ever needing to spin up your own server. Of course REST APIs can be ported to serverless- that's the example project here! Did you also know though that since [december 2018](https://aws.amazon.com/blogs/compute/announcing-websocket-apis-in-amazon-api-gateway/) AWS lambda also supports websockets?! That's right, massively scalable socket servers can be built as just one little lambda function, and the serverless framework has done a great job of configuring websockets with a [flexibile yet simple websocket API](https://serverless.com/blog/api-gateway-websockets-support/) in the project's `serverless.yaml` file. Also, frontend websites and webapps can be hosted serverlessly with just the finished static files in an S3 bucket with a few additional configurations for how you'd like it to be hosted.


## The Many "App.js" Files
It is extremely common in the express framework to store the webserver created by express in a variable named _app._

```
const app = express()
```

It is also a common pattern to use `app.js` as the name core, root file that creates this server and handles some various endpoints. Your project should only have one _app.js_ file, and we actually recommond calling it simply _app.js_ (no need to get fancy here in your own projects). In this project, however, I don't have a file with the short _app.js_ name. Instead, this project contains many files that begin with `app`. The purpose of this is to give you, the developer modeling your project after Titanium Lambda, the option to choose the app.js file that best fits your situation. 


## Optional "Impatient Deploy" With Serverless Framework
Although having Amazon's CodePipeline hooked up to this project is pretty awesome, the waiting time for the stages of CodePipeline can just be too unbearably slow for me.

For a much faster feedback loop you can deploy to another environment, independent of your pipeline environments, which I like to call the "impatient environment". You can do this with the [serverless](https://github.com/serverless/serverless) framework CLI and (included here) serverless.yml configuration file.

First, install the serverless npm module globally:

`npm i serverless -g`

You will also need to provide your access keys to the AWS cli tool so that serverless knows to push to _your_ AWS account. This can be done with the aws cli _configure_ command:

`aws configure`

Then you can deploy like this:

`serverless deploy`

## Running Lambdas Locally With Serverless Framework
The serverless framewor is great for running lambda functions. In fact, there are (at least) two different ways of running your lambda functions locally with the serverless framework. 

### Sls Invoke
The serverless cli's `invoke` command allows you to run a single execution of one of your lambda functions. This is useful if you want the function to run a single tiem and then exit the process. You can use various flags to control the REST resource type, pass params, cutomize headers, etc. There is no extra configuration / installation necessary to use the invoke command.

Example:
```
serverless invoke local -f {function_name} --data '{ "queryStringParameters": {"id":"P50WXIl6PUlonrSH"}}'
```

### Sls Offline
The serverless cli's `offline` command allows you  start a local server running that simulates your lambda function being deployed. This is useful if you want test your lambda function from Postman, curl, other locally running tests, etc. In order to use serverless offline you need install the npm library and add it as a plugin in the `serverless.yaml` config file.

Install lib: 
```
npm install serverless-offline --save-dev
```

Add to `serverless.yaml`:
```
plugins:
  - serverless-offline
```

Then you can start a local server hosting your lambda function at http://localhost:3000 like so:
```
sls offline start
```

## Handling Args
There are a few different ways one can invoke a Lambda function, and each of them have their own way of passing in arguments, or input paramters, to your function. Titanium Lambda aims to make this easy on you, the developer, by boiling all these input sources into one variables, `args`, that contains the object of data passed that would be expect.

(ie. query paramters for a GET request, request body for POST, lambda console test event object). 

## Easy DevOps AWS CodePipeline
 
<img src="./images/aws-code-pipeline.png" width="650" />

When you make a project with AWS Codestar, it automatically sets up CodePipeline which is a configurable, flexible build, test, and deploy pipeline to which one can add or remove any number of steps. I think my ideal pipeline steps would look something like this.


- Run pre-commit hook (lint, unit tests, integration tests, smoke tests).
- Commit code to the git repository.
- Push code to git repository.
- Code gets automatically picked up by AWS CodePipeline build server.
- Runs pre-build tests (lint, unit tests, integration tests, smoke tests).
- Generate JsDoc.
- Build project (using buildspec.yml file in project root).
- Deploy to dev environment.
- Run load tests against dev environment (optional).
- Run e2e tests against live dev environment.
- Manually approve deployment from Dev to prod.
- Deploy to prod.


## Unit Tests

The unit tests are meant to test functions in isolation, mocking basically all dependencies. The unit tests make heavy 
use of stubs and spies from the sinon.js library to ensure one little "unit" of code at a time.

If you don't have mocha installed globally, please do that first:

`npm i -g mocha`

Then you can run the units tests like so:

`npm test`

Then you can run the test and generate code coverage reports:

`npm test-coverage`

note: in order to run this you have to have instabul installed globally:

`npm i -g istanbul`


Notice that right now this template project has 100% test coverage!

<img src="./images/code-coverage-100.png" width="650" />


___As a general rule of thumb, there should be at least one unit test for every function in your src folder!___


## Integration Tests
These are similar to unit tests in that they aim to verify the correct return values for individual functions tested in 
isolation. However, unlike unit tests which have side effects such as external requests mocked, these tests allow the functions to call the external apis without mocking or stubbing anything. If there is a problem or bug occurring in the code directly around the your async code wrappers, these tests can really expose that.

___As a general rule of thumb, there should be an integration test for every function that returns a promise (or promise-like object)!___


## Smoke Tests
These tests use the supertest library to hook into the express middleware and basically simulate firing the REST event 
to your function and expecting that the correct response is returned, including headers and authotization-headers. These tests really try to covert the whole lambda function, beginning when the REST request first comes in and veryfying that the right response is sent from the lambda function back to the client. Since these tests use the supertest library to hook into the express middleware they basically simulate firing the REST event to your function and then expect that the correct response is returned, including headers and authotization-headers.


## E2e Tests

E2e, or "end-to-end" tests can have different meanings in different situations. For front-ends frameworks e2e testing
often involves browser automation, something that doesn't really make sense for a lambda function. In this project I have
two types of e2e tests: 

- rest endpoint e2e tests
- small integration tests

These correspond to the files in the e2e-tests/ folder in the root of this project. They are both run with the command:
`npm run e2e-test`


## BDD Tests
Behavior driven development is awesome! But when it comes to the code, what does bdd really mean? In the world of Nodejs it
basically comes to using CucumberJS to run your "feature files" and "step definition files". Although I haven't yet 
added npm scripts to execute the bdd tests, I have an example feature file that you might use for this project. Feature files are awesome because they are written in Gherkin syntax. This reads like plain english, but can also be executed from the command line just like other automated tests. 


## Performance Tests

When it comes to aws lambda functions, you can quantitatively measure the performance of every execution with two numbers: __max memory used__ and __duration of function execution__. Measuring the performance of aws lambda functions is actually very easy since every execution of your aws lambda function will output these numbers in the cloudwatch logs (and in the aws lambda console if invoking the function from there). I don't currently have an automated script for performance tests like I do for the other automated tests, but to me performance is something to look at, compare, and improve over time as the function is in use.


## Load Tests with Gatling

For load testing REST endpoints my favorite tool is [Gatling](https://gatling.io/). It's very awesome for a number of reasons:
  - Efficiently uses Akka messages instead of real threads.
  - Has a clean, succinct DSL to describe your load tests.
  - Outputs pretty charts for analyzing test results.
  - Easily run from shell with a single command (and can be run in CI pipeline!).
  - Has a badass gatling gun logo.
  
Unfortunately, there is no npm package for gatling. The way that I normally add gatling to a project is to just go to the [gatling download page](https://gatling.io/download/), download the gatling folder, and just drop the folder into your project.

Gatling can be used to perform load testing on the live lambda function endpoint. 
With gatling we can hit the endpoint with X number of concurrent connections and then look at the metrics of how the function performs.
 
_Note: Running gatling load tests require Java 8 JDK._
 
To run load tests:
 
`npm run load`
 
This will call gatling.sh and runs the simulation specified with the -s flag.
 
Results will then be output to `/tests/gatling-2.3.1/results`.
 
This will create a nice little dashboard with charts which you can view by opening the generated index.html file in a browser. The charts will look something like this:

<img src="./images/gatling-charts-1.png" width="675" />

<img src="./images/gatling-charts-2.png" width="675" />

<img src="./images/gatling-charts-3.png" width="675" />
 
The tests in Gatling are called "simulations", and the simulation files are written in Scala (but don't be afraid of them!).
 
The main load test simulation for this project is located here: `tests/load/gatling-2.3.1/user-files/simulations/default/user-embed-lambda.load.test.scala`.
 
_Note: Load tests are currently _**not**_ run as part of the CI pipeline._
  
## Hot Vs Cold Functions
It's very interesting to see just how much the response times of a Lambda function can vary for consecutive executions of the exact same Gatling simulation. For example, here's the results of test calling a 512mb Lambda function via a POST endpoint where I'm ramping up the number of users per second from 10 to 50 over 5 seconds.

##### Gatling output, run 1:
<img src="./images/gatling-run-1.png" width="650" />

##### Gatling output, run 2:
<img src="./images/gatling-run-2.png" width="650" />

##### Gatling output, run 3:
<img src="./images/gatling-run-3.png" width="650" />

From the above screenshots we can see that in the first run, when the lambda is "cold", the average response time was 712ms with a worst case of 2331ms. In the second run, only about 10 seconds later, we can see times improve to an average response time of 376ms with an interestingly worse worst case than the first run. In the final run things look even better with an average response of 289ms and a worst case of only 1254. The key thing to remember is that cold lambdas can have some variability with execution duration, and the only way to get "hot" response times all the time is to have an endpoint with a large flow of consistent traffic.

## UPDATE: Avoiding Cold Start Pain
  
## Amazon X-ray Performance Analysis 
With each execution of a lambda function you get the total number of milliseconds for which you were billed, but there's no insight into what what going on during that time. Amazon X-ray is a neat service that shows a visual timeline of what's happening during your function execution so you can see how much time the nodejs engine took to start up, how much time each of your functions take to complete, etc. Note that this protect is not currently up to use aws x-ray, but it would take only a few lines of code to add it. Tools like Gatling are great for telling you if your service is slow but not _why_ it's slow. Once you see that your service is running too slowly, Amazon X-Ray is an excellent tool to allow you to see what functions of your code are taking longest.

<img src="./images/aws-x-ray-lambda.png" width="650" />

Note: Currently there is no xray setup in the code (now accepting pull requests. haha)

## JsDoc
I'm definitely a fan of making your code more readable and easier to understand. I've tried to annotate my functions in this project with descriptions and @param / @return type descriptions. 

@TODO - Add tips for generating and hosting jsdoc reports to this guide.


## Included Files for AWS DevOps Pipeline

* buildspec.yml - this file is used by AWS CodeBuild to package your
  service for deployment to AWS Lambda
* template.yml - this file contains the AWS Serverless Application Model (AWS SAM) used
  by AWS CloudFormation to deploy your service to AWS Lambda and Amazon API
  Gateway.

## Use Good REST Naming Convenstions (Plural Node Names)
When designing your REST APIs it can initially seem appealing to use singular words for the endpoint. For example, 

## Versioning, Tagging, And Releasing
It is a very good practice to mark your codebase at different points in timee when you release a new version. This can help tremendously when you want to go back to previous versions, when you have multiple versions in production at once, and when you want to see some history of previous releases. It's pretty straightforward to create a release with git by using the _git tag_ command.

'git tag v1.0.0'

Don't forget to push your tag too.

'git push origin master v1.0.0'

At one time github had this nice little box in the margin on the "releases" page of the git repos you own.It recommends using semantic versioning with three numbers loosely representing _major version_, _new feature_, and _bugfix_. They also recommend beginning your version names with a "v" which is not really necessary, but personally I like this and follow this convention. At the very least you should have some consistent naming convention for all versions in a given project.


## DR (Disaster Recovery)
Realizing that there are issues with the code in your live, production environment is never fun, but it can happen to anyone. Instead of sheepily praying that it will never happen to you we recommend preparing for this situation early so you will know exactly what to do and (hopefully) won't be franticly scrambling in the heat of the moment. So, let's suppose a user / business analyst / tester / CEO of your company says they think there is an issue with your Lambda function. What to you do?

#### 1) Recreate / Confirm the Issue.
The engineer attempting to tackle the prblem should first ensure he or she properly understands the problem and what is the desired outcome. Talking to the initial reporter is ideal, but also talking about the problem with other team members who have context on the subject is also ususally helpful. 

#### 2) Check the Lambda Console Metrics & Graphs (Especially _Errors_ & _Duration_).

<img src="./images/little-metrics-lambda.png" width="600" />

<img src="./images/cloudwatch-metrics-chart.png" width="600" />

#### 3) Check the Logs.
Go back and look through the logs at the time for Errors or anything out of the ordinary. Posibly temporarily add more logging in an attempt to expose the root cause.

#### 4) Rollback Endpoints in API Gateway (if necessary).
Use the versions / aliases feature of AWS lambda in order to have AWS store previous versions and make rollbacks easier. Of course, rollbacks can also be done by pushing the previous state of code through CI until it hits production, but the correction is not as immediate as rolling back via the versions / aliases method.

#### 5) Determine If Automated Tests For The Issue Can Be Added.
Ideally, we can writes new automated tests for our system that fail because of the bug. Then when we path the root cause of the issue, the tests describing behavior properly should pass. This may take some back and forth to get things right, and that's fine. The key is writing tests that expose the bug in all cases because then it can fixed once and for all, with the automated tests providing a safeguard against regressions in the application where that same bug appears again. This, "right automates tests that perfectly expose the bug" is much easier to say than it is to do, and indeed it is the key to being a good tests automation engineer. Take breaks often and try to approach things from a different angle if you are spinning your wheels without getting anywhere, but don't get frustrated and don't give up!

#### 6) Make Changes, Run Tests, Verify Stable Staging Environment.
Once the patch has been made, run the various tests, linters, and git hooks, push the code to CI and through the various environments (once passing the proper checkpoints of course) until it is in production. Once it is fixed, in production, and securely banished from the app with effectivel unit tests, the team can finaly breathe a sigh of relief and congratualte each other with a small celebration in account on of this unanimous win for the develpment team, users, and all other stakeholders.

#### 8) Repeat Steps 1, 2, and 3.
Now that this bug has been taken care of and the celebrations are over, the team can move on to trouble-shooting another bug in a similar manner or go on to create new features (which, if written in TDD style, are also done in a pretty similar manner). 


## Shepherding The Logs
When your lambda functions run, the logs get stored in a handy little place within AWS called "Cloudwatch". However, this is quite a bad long-term storage place for you logs because 1. there is a max time duration, after which the logs will be deleted forever, and 2. filling up Cloudwatch with logs gets expensive pretty quickly. For many companies it makes sense to go with the quick and easy solution of hooking up your lambda functions to some SAS offering that will store and analyze your logs, often with extra charting and filtering tools to help you dig deeper into the logs. There are many srevices like this, including [DataDog](https://www.datadoghq.com), [Logz.io](https://logz.io), and [Sum Logic](https://www.sumologic.com). However, if you are more the type of person who would rather do it yourself rather than rely on one of this middleman logs management services, you could always set up another lambda function such that it set to run at some predefinied time interval (such as once each day) that corrals the previous day's logs and places them in a more efficient long term storage place (such as in S3).

## Automating Log Management

By default the logs of AWS Lambda functions get saved to CloudWatch. This is fine at first, but it is not a good long-term solution for storing the logs because it quickly becomes expesive and the logs are deleted after some period of time. That is why you should have a script that periodically copies the logs over to some other storage area (possibly S3). It's definitely possibly to create this script yourself, but there are also many paid services that do this for you and provide a nice UI for viewing and interacting with your logs. Some examples of these services are [Splunk](https://www.splunk.com/en_us/solutions/solution-areas/log-management.html), [Logz.io](https://logz.io/log_management_software_ta), [Sumologic](https://www.sumologic.com/what-is-log-management/), [Papertrail](https://papertrailapp.com/solution/log-management/), [Logzilla](https://www.logzilla.net/), [Dashbird](https://dashbird.io/blog/best-practice-for-logging-lambdas/), and [Data Dog](https://www.datadoghq.com/) just to name a few.

## Can We Just Lambda All The Things?
Lambda is excellent for request-response style CRUD operations, but it can't do streams or long-running applications. If you applications needs realtime updates to changes in the data then *__you should not use lambda__* for this. Instead, you should something that deals with streams such as [Websockets](https://github.com/websockets/ws), [Kafka Streams](https://kafka.apache.org/documentation/streams/), [AWS Kinesis](https://aws.amazon.com/kinesis/data-streams/), [MongoDb ChangeStreams](https://docs.mongodb.com/manual/changeStreams/), etc. For this reason I would say no, most applications should not be built with only aws lambda but rather *__should be built with a combination of serverless functions and realtime streams__*. Don't fall into the trap of overusing any one type of pattern! 

## Why "Titanium"?
Titanium is one of the densest materials on earth. It has been battle-tested and is used for the most extreme industries such artillery, military, and aerospace. Titanium is also especially recognized for its high strength-to-weight ratio, and it thinks a parrallel can be drawn with Lambda functions as they are meant to be both super powerful / scalable yet very lightweight.

## Official Song
The official song of the Titanium Lambda project is [Titanium by David Guetta & Sia](https://www.youtube.com/watch?v=JRfuAukYTKg).

Imagine your Lambdas singing along to the lyrics:

  _`♪ You shoot me requeeeeeeeests, but I won't faaaaaiiiiiil! I AM TITAAAAANNNNNNIIIIIIIUUUUUUUUUUUMMMM! ♪`_

## Thanks!!

Thanks to all the contributors who have helped make this project awesome!

If you are new to this project, feel free to open issues with questions or suggestions. You can also join our [slack group](https://join.slack.com/t/titaniumlambda/shared_invite/enQtMzc2ODQ4ODgyNjI4LTQyYzc4Mzc4Yzg2YmZkZGU2ZGFlMjliNmQ3MmVjYmQwYzkxZGUwZDVlZWNhNTNlODg0NTk2Yzc1YWYyNzliYWQ), and if you like this repo please give it a star! 😉

## License
MIT 
 
