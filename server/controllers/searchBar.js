const axios = require('axios')
const usdaKey  = require("../config.js")

module.exports = {
    usdaDB : {
        post: function(req, res) {
            console.log('udsakey:' , usdaKey.apiKey)
            console.log('serverside post invoked')
            var searchTerm = req.body
            let url = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + searchTerm.searchTerm + "&sort=n&max=25&offset=0&api_key=" + usdaKey.apiKey
            axios.post(url)
            .then((response) => {
                console.log("bananaPancakes", response.data)
                res.send(response.data);
            })
            .catch((error) => {
            console.log(error);
            });
        }
    },

    usdaReport: {
        get: function(req, res) {
            // console.log('udsa key:' , usdaKey)
            console.log('pose in controller invoked')
            // let api_key =
            let ndbno = req.body
            console.log('ndbno number', ndbno.ndbno)
            let url = "https://api.nal.usda.gov/ndb/reports/V2?ndbno=" + ndbno.ndbno + "&type=b&format=json&api_key=" + usdaKey.apiKey
            axios.get(url)
            .then((response) => {
                console.log('search with ndbno number*******************************', response.data)
                res.send(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}

