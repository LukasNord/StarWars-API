myApp.controller('FavoritesController', ['SwapiService', function(SwapiService){

    let self = this;
    self.favorites = {};
    self.favorites.people = SwapiService.favorites.people;
    self.favorites.species = SwapiService.favorites.species;
    self.favorites.planets = SwapiService.favorites.planets;
    self.favorites.starships = SwapiService.favorites.starships;
    self.favorites.vehicles = SwapiService.favorites.vehicles;
    self.favorites.films = SwapiService.favorites.films;
    
    SwapiService.getFavorites();

   
    self.deleteFavorite = function(favorite){

        console.log('favorite: ', favorite._id);
        SwapiService.deleteFavorite(favorite_.id);

    }

    

}]);