#!/usr/bin/env bash

aws s3api create-bucket --bucket EXAMPLE-pipeline --region us-east-1 &&
aws codebuild create-project --cli-input-json file://codebuild-config.json &&
aws codepipeline create-pipeline --cli-input-json file://pipeline-config.json &&
echo "Success!"