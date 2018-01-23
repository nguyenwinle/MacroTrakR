const axios = require('axios')

module.exports = {
    usdaDB : {
        post: function(req, res) {
            console.log('serverside post invoked')
            var searchTerm = req.body
            let url = "https://api.nal.usda.gov/ndb/search/?format=json&q=" + searchTerm.searchTerm + "&sort=n&max=25&offset=0&api_key=iI0u395IWFYhkrSrVeI0752jLGcdmfzlYTrp3F9H"
            axios.post(url)
            .then((response) => {
            res.send(response.data);
            })
            .catch((error) => {
            console.log(error);
            });
        }
    }
}