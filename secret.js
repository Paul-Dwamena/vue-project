const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  secret: process.env.secret,
  masterKey: process.env.key,

};