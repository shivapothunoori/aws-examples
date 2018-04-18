var AWS = require("aws-sdk");
var docClient = new AWS.DynamoDB.DocumentClient();

/**
*Function used to fetch data from given table
*/
exports.handler = (event, context, callback) => {
   console.log('Received event:', JSON.stringify(event, null, 2));
   var tableName = process.env.TABLE_NAME ;
   var uuid = event.body.uuid;
   var  params = {
    TableName: tableName,
    FilterExpression: "#uuid = :uuidIdValue",
    ExpressionAttributeNames: {
        "#uuid": "uuid",
    },
    ExpressionAttributeValues: { ":uuidIdValue": uuid }

};
    console.log("uuid:::: " + uuid);
    docClient.scan(params, onScan);

    var count = 0;

    function onScan(err, data) {
        if (err) {
            console.error("Unable to scan the table. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Scan succeeded.");
            console.log(data);

  /*          data.Items.forEach(function(itemdata) {
               console.log("Item :", ++count,JSON.stringify(itemdata));
            });

            // continue scanning if we have more items
            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log("Scanning for more...");
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan);
            }
            */
            callback(null, data.Items);
        }
    };
    */
