var express = require('express');
const {getAccessToken} = require("../controllers/getAccessTokenController");

var router = express.Router();

router
    .post('/getAccessToken', getAccessToken);

module.exports = router;