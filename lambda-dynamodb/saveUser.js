
'use strict';

console.log('Loading Save User Function..!');
var AWS = require('aws-sdk');
var docClient = new AWS.DynamoDB.DocumentClient();
var uuid = require('uuid');

/*
 *
 */
exports.handler = (event, context, callback) => {
    console.log('Received event:', JSON.stringify(event, null, 2));
    var user = event.body;//JSON.parse(event.body);
    var i;
    var tableName = process.env.TABLE_NAME;
    console.log("tableName: " + tableName);
    var params = {
              TableName:tableName,
              Item: user
            }
    var obj = {};
     docClient.put(params,function(err,data){
                if (err) {
                      console.log(err);
                       obj = {"Status": err};
                          callback(null,obj);
                      } else {
                          console.log("SUCCESS--->>>.: " + JSON.stringify(data));
                          callback(null,obj);
                      }
                 });

};
