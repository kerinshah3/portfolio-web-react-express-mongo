const jwt = require('jsonwebtoken')
const {jwt_token} = require("../key");

function authenticateToken(req,res,next){

    if (!req.headers.authorization || req.headers.authorization.indexOf('Bearer ') === -1) {
        return res.status(401).json({ message: 'Missing Authorization Token' });
    }

    const token = req.headers.authorization.split(' ').at(1)

    try{
        const results = jwt.verify(token, jwt_token)
        console.log(results)
        next()
    }catch (e){
        res.status(401).json({message: "Not authorized to access this route"})
    }
}

module.exports={
    authenticateToken
}