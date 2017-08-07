# aws-sns-sms
An AWS SNS Module to send msessage to a phone number.(Can be used to send OTP)


## Installation

  npm install aws-sns-sms

## Usage
```javascript
  let sendMsg = require('aws-sns-sms');
  let awsConfig = {
  accessKeyId: '',
  secretAccessKey: '',
  region: ''
  };

  let msg = {
    "message": "your OTP is 845214",
    "sender": "VISHAL",
    "phoneNumber": "+91XXXXXXXXXX" // phoneNumber along with country code
  };
  sendMsg(awsConfig, msg).then(data => {
    console.log("Message sent");
  })
  .catch(err => {
    consolr.log(err);
  });
```
