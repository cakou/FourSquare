var app = angular.module("app")
    
app.controller("mainController", function ($scope, $http) {
    

    $http({
        method: 'GET',
        url: 'https://api.foursquare.com/v2/venues/explore',
        params: {
            client_id: 'MPWTYZP1FUBZBPMTQAUSXS4XP2ZMG3RHDYDLQC12YYSOXBDL',
            client_secret: '43A1LQFCBGZVRETF212QZMSIBA5IVPHXBS3NXI4G5VSEHNO3',
            ll: '40.7243,-74.0018',
            query: 'coffee',
            v: '20170801',
            limit: 20
          }
    }).then(function (data) {
        $scope.objects = data;
        console.log('success: ', data);
        }).catch(function(response){
            console.log('response: ', response)  
        });

});