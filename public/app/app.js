'use strict'

const config = ["$stateProvider", "$urlRouterProvider", Config]

angular.module('app', ["ui.router", "ngResource", 'ui.materialize', 'ngAnimate']).config(config)

function Config($stateProvider, $urlRouterProvider) {
    const states = [{
        name: "home",
        url: "/",
        component: "home"
    }, ]

    states.forEach((state) => {
        $stateProvider.state(state)
    })
    $urlRouterProvider.otherwise('/')

}