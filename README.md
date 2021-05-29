# Nodejs-Typescript Serverless Example

The goal of the sample is to mock out the experience for writing serverless nodejs lambdas with typescript and being able to invoke them locally before deploying to AWS Lambda service.
This project leverages the `lambda-local` package over alternatives like `aws-serverless-runtime-emulator`, `lambda-docker`, or `serverless-offline` which though robust, are a bit of an overkill and require quite the boilerplate if you particularly want to write vanilla lambdas using the aws-sdk




## Getting started
You need nodejs, typescript and npm installed globally on your machine

1. clone this repository
2. Install the dependencies using `npm install`
3. Invoke the example lambda by running `npm run invoke`


