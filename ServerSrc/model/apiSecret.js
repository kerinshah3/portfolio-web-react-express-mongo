const mongoose = require('mongoose')


const header = mongoose.Schema({
    variable: { type: String, required: true },
    value: { type: String, required: true },
    type: { type: String, required: true }
}, { _id : false });

const apiSecret = mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    headers:[
        header
    ],
    typeAuth:{
        type:String,
        require:true
    }
}, {
    timestamps: true,
    versionKey: 'version'
})

mongoose.model("apiSecret",apiSecret)