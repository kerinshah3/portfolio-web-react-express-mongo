const mongoose = require('mongoose')
const {ObjectId} = mongoose.Schema.Types

const portfolioStockSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    body:{
        type:String,
        require:true
    },
    photo:{
        type:String,
        require:true
    },
    postedBy:{
        type:ObjectId,
        ref:"user"
    }
})

mongoose.model("portfolioStock",portfolioStockSchema)