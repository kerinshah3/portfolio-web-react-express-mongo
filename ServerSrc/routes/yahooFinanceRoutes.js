var express = require('express');
var router = express.Router();
const axios = require('axios');


/* GET home page. */
router
    .get('/getStockDetails/:stockTicker', async function (req, res, next) {
        const stockName = req.params
        console.log("Path Variable {}", stockName.stockTicker)

        const options = {
            method: 'GET',
            url: 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/modules',
            params: {
                ticker: stockName.stockTicker,
                module: 'financial-data'
            },
            headers: {
                'X-RapidAPI-Key': '1b279606femshee03f80ad916d6fp18565ajsn2a28f4f1fa06',
                'X-RapidAPI-Host': 'yahoo-finance15.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            console.log(response.data);
            res.status(200).json(response.data)

        } catch (error) {
            console.error(error);
            res.status(400).json(error)
        }
    });

module.exports = router;