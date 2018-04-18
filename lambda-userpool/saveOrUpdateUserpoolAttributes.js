var AWS = require('aws-sdk');
var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider();

/**
 *  Function to update userpool attributes
 */
exports.handler = (event, context, callback) => {
        var reply = {};
        var username, email, phone, userPoolId;

        var params = {
        UserAttributes: [
        {
        Name: 'email',
        Value: email
        },
            {
              Name: 'email_verified',
              Value: 'true'
            }

        ],
        UserPoolId: userpoolId,
        Username: userpoolSubId
        };
        cognitoidentityserviceprovider.adminUpdateUserAttributes(params, function(err, data) {
        if (err){
          console.log(err, err.stack); // an error occurred
          callback(err,null);
        }
        else{
          console.log(data); // successful response
          console.log(null, {"Status" : "User updated"});
        }
        });

};
