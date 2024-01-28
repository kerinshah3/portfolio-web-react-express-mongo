var express = require('express');
const {saveSecret,getAllSecret} = require("../../controllers/secretController");
const {authenticateToken} = require("../../middleware/auth");


var router = express.Router();


router
    .get('/secret/all',authenticateToken, getAllSecret)
router
    .get('/secret/:id',authenticateToken)
router
    .post('/secret',authenticateToken, saveSecret);
router
    .put('/secret',authenticateToken)
router
    .delete('/secret/:id',authenticateToken)


module.exports = router;