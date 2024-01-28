const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    jwt_token: process.env.JWT_TOKEN,
    mongoUri: process.env.MONGOURI,
    port: process.env.PORT
};