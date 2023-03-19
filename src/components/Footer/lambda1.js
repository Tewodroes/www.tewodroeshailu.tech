const AWS = require("aws-sdk");
const sns = new AWS.SNS({ apiVersion: "2010-03-31" });
const sqs = new AWS.SQS({ apiVersion: "2012-11-05" }); 
exports.handler = async (event) => {
    console.log(JSON.stringify(event));
    const message = JSON.stringify(event);      // Test for Events from here
    //const message = JSON.stringify(JSON.parse(event.body));  //Test for Events from API gateway
    await sns.publish({
        Message: message,
        TopicArn: "arn:aws:sns:us-east-1:910212951832:PortfolioEmailSendingTopic",
    }).promise();
    await sqs.sendMessage({
        MessageBody: message,
        QueueUrl: "https://sqs.us-east-1.amazonaws.com/910212951832/Portfolio-Trigger-Lambda-To-Save-To-DaynamoDB-SQS",
    }).promise();
    const response = {
        statusCode: 200,
        headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Headers": "Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token",
            "Access-Control-Allow-Methods": "OPTIONS,POST",
            "Access-Control-Allow-Credentials": true,
            "Access-Control-Allow-Origin": "*",
            "X-Requested-With": "*"
        },
        body: JSON.stringify('Email is Sent! Success!'),
    };
    return response;
};