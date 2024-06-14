require('dotenv').config(); 
module.exports = {
  mongoURL: process.env.MONGO_URI,
  port: process.env.PORT || 4000, 
};
