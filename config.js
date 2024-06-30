const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
  MONGODB_URI: process.env.MONGODB_URI === undefined ? `mongodb://uijbgicwqu84dycb6hhx:BhihqihAmcE1CM6l7xrs@n1-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017,n2-c2-mongodb-clevercloud-customers.services.clever-cloud.com:27017/bwveihljhqanzrq?replicaSet=rs0` : process.env.MONGODB_URI
};
