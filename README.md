# Jim's Codestar Enterprise Pipeline Starwars NodeJS Lambda Microservice

Welcome! I, Jim Lynch, am in the interview process for an awesome position at a really cool startup company where i would potentially be the leader and pioneer of all things serverless! So, I got to thinking: If I were in the position where I was "Head of Serverless" for a company, what would my process look like for developing aws lambda functions _for real?_ What would be the most robust, battle-hardened way of automated testing, automatically deploying (and manual aproval-driven testing for prod), and juggling muliple deployment environments without going crazy? Well, I've found a really nice way to do all this with some awesome AWS services, and I think my ideal dev process would look something like this...


## Try the live api now!

Try hitting the live endpoint via putting it in your browser address bar, ajax, curl, postman, or some other REST client!  
`https://ax7ezyq21m.execute-api.us-east-1.amazonaws.com/Prod?character=1`



## The CodeStar Dashboard

Codestar Dashboard: https://console.aws.amazon.com/codestar/home?region=us-east-1#/projects/jims-cepsnlm/dashboard
_(Note: You won't be able to acess the codestar dashboard unless specifically given permissions by Jim.)_

This sample code helps get you started with a simple Express web service
deployed by AWS CloudFormation to AWS Lambda and Amazon API Gateway.

## Why AWS?

Here I'm using AWS CodePipeline, but the Jimbo pipeline is in a way independent of AWS.

## "The Jimbo Pipeline"

While CodePipeline is a configurable, flexible pipeline to which one can add or remove any number of steps, the Jimbo Pipeline is a specific set of steps that I follow like a recipe for new Lambda services.

- Commit code to the git repository.
- Code gets automatically picked up by AWS CodePipeline build server.
- Run Unit tests.
- Run "Local e2e tests"
- build project
- deploy to dev
- run "true e2e tests" hitting dev environment
- deploy to staging
- run "true e2e tests" hitting dev environment
- manually approve deployment from staging to prod
- deploy to prod




## Unit Tests

The unit tests are meant to test functions in isolation, mocking all side effects (in this case, the axios requests).

If you don't have mocha installed global, please do that first:
`npm i -g mocha`

Then you can run the units tests like so:
`npm test`


## Integration Tests

E2e, or "end-to-end" tests are to me referring to tests that actually call out to the external services and verify the correct response. In this project I have created one file for "integration tests". Like unit tests, these aim to test individual source code functions in isolation. However, unlike unit tests these integration tests actually make calls out to external services.

`npm run e2e-test`


## E2e Tests
In order to do a full end to end test we'd want to call the lambda function witg input similar to a real invocation (either from a REST call, scheduled event, or some other trigger). In this example I'm using the supertest library too hoook into the express middleware and send fake calls to it as if they were real REST requests. When these are working properly it can givena rwql sense of confidence that the lambda function is working properly from start to finish.


## Performance Tests

When it comes to aws lambda functions, you can quantitatively measure the performane of every execution with two numbers: __memory used__ and __duration of function execution__. Measuring the performance of aws lambda functions is actually very easy since every execution of your aws lambda function will output these numbers in the cloudwatch logs (and in the aws lambda console if invoking the function from there).





This sample includes:

* README.md - this file
* buildspec.yml - this file is used by AWS CodeBuild to package your
  service for deployment to AWS Lambda
* app.js - this file contains the sample Node.js code for the web service
* index.js - this file contains the AWS Lambda handler code
* template.yml - this file contains the AWS Serverless Application Model (AWS SAM) used
  by AWS CloudFormation to deploy your service to AWS Lambda and Amazon API
  Gateway.
* tests/ - this directory contains unit tests for your application


What Do I Do Next?
------------------

If you have checked out a local copy of your repository you can start making
changes to the sample code.  We suggest making a small change to app.js first,
so you can see how changes pushed to your project's repository are automatically
picked up by your project pipeline and deployed to AWS Lambda and Amazon API Gateway.
(You can watch the pipeline progress on your AWS CodeStar project dashboard.)
Once you've seen how that works, start developing your own code, and have fun!

To run your tests locally, go to the root directory of the
sample code and run the `npm test` command, which
AWS CodeBuild also runs through your `buildspec.yml` file.

To test your new code during the release process, modify the existing tests or
add tests to the tests directory. AWS CodeBuild will run the tests during the
build stage of your project pipeline. You can find the test results
in the AWS CodeBuild console.

Learn more about AWS CodeBuild and how it builds and tests your application here:
https://docs.aws.amazon.com/codebuild/latest/userguide/concepts.html

Learn more about AWS Serverless Application Model (AWS SAM) and how it works here:
https://github.com/awslabs/serverless-application-model/blob/master/HOWTO.md

AWS Lambda Developer Guide:
http://docs.aws.amazon.com/lambda/latest/dg/deploying-lambda-apps.html

Learn more about AWS CodeStar by reading the user guide, and post questions and
comments about AWS CodeStar on our forum.

AWS CodeStar User Guide:
http://docs.aws.amazon.com/codestar/latest/userguide/welcome.html

AWS CodeStar Forum: https://forums.aws.amazon.com/forum.jspa?forumID=248

What Should I Do Before Running My Project in Production?
------------------

AWS recommends you review the security best practices recommended by the framework
author of your selected sample application before running it in production. You
should also regularly review and apply any available patches or associated security
advisories for dependencies used within your application.
