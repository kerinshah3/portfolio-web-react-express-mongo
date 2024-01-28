const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('../model/user')
const mongoose = require("mongoose");
const {jwt_token} = require("../key");
const User = mongoose.model("user")

function userLogin(emailId,password, res) {
    User.findOne({email: emailId})
        .then(foundUser => {
            if(!foundUser){
                return res.status(422).json({error:"Enter correct email address" })
            }
            bcrypt.compare(password,foundUser.password)
                .then(match => {
                    if(match){
                        const token = jwt.sign({_id:foundUser._id}, jwt_token,{
                            expiresIn: '10m'
                        })
                        return res.json({token:token})
                    }
                    else{
                        return res.status(422).json({error:"Email Or password is wrong"})
                    }
                })
        })
}

module.exports = {
    userLogin
}