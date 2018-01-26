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
        get: (req, res) => {
            let api_key = usdaKey.apiKey
            let ndbno = req.query.ndbno
            let type = "b";
            let format = "json";
            axios.get("http://api.nal.usda.gov/ndb/reports", {
                params: {
                    api_key: api_key,
                    ndbno: ndbno,
                    type: type,
                    ndbno: ndbno
                }
            })
            .then((response) => {
                res.send(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
        }
    }
}

