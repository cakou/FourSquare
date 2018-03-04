'use strict'

angular.module("app")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })

function Home($http) {
    $http.get('https://api.foursquare.com/v2/venues/explore', {
        params: {
            client_id: 'MPWTYZP1FUBZBPMTQAUSXS4XP2ZMG3RHDYDLQC12YYSOXBDL',
            client_secret: '43A1LQFCBGZVRETF212QZMSIBA5IVPHXBS3NXI4G5VSEHNO3',
            ll: '40.7243,-74.0018',
            query: 'coffee',
            v: '20170801',
            limit: 5
        }
    }).then((response) => {
        let array = []
        for (let i = 0; i < response.data.response.groups[0].items.length; i++) {
            array.push(response.data.response.groups[0].items[i].venue)
        }
        console.log(array)
        this.venues = array
    })


this.sendKey = (event) => {
    if (event.which === 13) {
        this.query = "";
        $http.get('https://api.foursquare.com/v2/venues/explore', {
        params: {
            client_id: 'MPWTYZP1FUBZBPMTQAUSXS4XP2ZMG3RHDYDLQC12YYSOXBDL',
            client_secret: '43A1LQFCBGZVRETF212QZMSIBA5IVPHXBS3NXI4G5VSEHNO3',
            ll: '40.7243,-74.0018',
            query: this.query,
            v: '20170801',
            limit: 50
        }
        }).then((response) => {
        let array = []
        for (let i = 0; i < response.data.response.groups[0].items.length; i++) {
            array.push(response.data.response.groups[0].items[i].venue)
        }
        console.log(array)
        this.venues = array
    })
    }
}
}