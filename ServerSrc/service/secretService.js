const mongoose = require("mongoose")
const apiSecret = mongoose.model("apiSecret")

function saveSecretService(apiSecret,res) {
    apiSecret.save()
        .then(user => {
            return res.status(200).json("Secret is saved")
        })
        .catch(err => {
            console.log(err)
            return res.status(400).json("Failed to save secret")
        })
}

module.exports = {
    saveSecretService
}