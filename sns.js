const AWS = require('aws-sdk');

const sendMsg = (config,message) => {
  return new Promise((resolve, reject) => {
    AWS.config.update(config);
    const sns = new AWS.SNS();
    let params = {
      Message: message.message,
      MessageAttributes: {
        'AWS.SNS.SMS.SMSType': {
          DataType: 'String',
          StringValue: message.type || 'Transactional'
        },
        'AWS.SNS.SMS.SenderID': {
          DataType: 'String',
          StringValue: message.sender
        }
      },
      MessageStructure: 'string',
      PhoneNumber: message.phoneNumber
    }
    sns.publish(params, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

module.exports = sendMsg;
