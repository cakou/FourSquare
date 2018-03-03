'use strict'

angular.module("admin")
    .component("home", {
        templateUrl: "app/components/home/home.html",
        controller: Home
    })

function Home($http, $rootScope) {
}