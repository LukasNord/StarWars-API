let myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

myApp.config(function($routeProvider, $mdThemingProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/search', {
            templateUrl: '/views/search.html',
            controller: 'SearchController as vm'
        })
        
        .when('/favorites', {
            templateUrl: '/views/favorites.html',
            controller: 'FavoritesController as vm'
        })
        .when('/home', {
            templateUrl: '/views/home.html',
            controller: 'HomeController as vm'
        })
        .otherwise(
            { redirectTo: '/home' }
        );

        //  $mdThemingProvider.theme('default')
        //  .dark();
    
});
