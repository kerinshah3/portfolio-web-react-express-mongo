const mongoose = require("mongoose")
const apiSecret = mongoose.model("apiSecret")
const {saveSecretService} =require("../service/secretService")

function saveSecret(req, res) {
    const {header ,name, description,typeAuth} = req.body

    let headers =[]
    for (const singleHeader of header){
        const header = {
            variable: singleHeader.variable,
            value: singleHeader.value,
            type: singleHeader.type
        }
        headers = [...headers,header]
    }

    const secret = new apiSecret({
        name, description , headers , typeAuth
    })
    return saveSecretService(secret,res)
}

function getAllSecret(req ,res) {
    console.log(req)
    res.status(200).json("ok")
}


module.exports = {
    saveSecret,
    getAllSecret,
}
