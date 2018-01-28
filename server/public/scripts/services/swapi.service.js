myApp.service('SwapiService', ['$http', function($http){
    console.log('swapi service loaded');
    
    let self = this;
    //search result array
    self.searchResults ={ list: [] };
    //favorites arrays from database
    self.favorites = {};
    self.favorites.people = { list: [] };
    self.favorites.species = { list: [] };
    self.favorites.planets = { list: [] };
    self.favorites.starships = { list: [] };
    self.favorites.vehicles = { list: [] };
    self.favorites.films = { list: [] };

    
    //pass resource and search query to a GET request to swapi
    self.searchSwapi = function(resource, searchValue){
        //set value of search query
        
        
        const config = {
            params: {search: searchValue}
        };
        
        $http.get(`https://www.swapi.co/api/${resource}`, config)
            .then( function(response){
            
            self.searchResults.list = response.data.results;       
        })
    };


    //Save resource to favorites

    self.addToFavorites = function(favorite){
        $http.post('/favorites', favorite)
            .then(function(response) {
                console.log('post response', response);
            })
                .catch(function (response) {
                console.log('error on post', response);
            });
    }

    //GET favorites from mongoDB
    self.getFavorites = function(){
        //get favorites by resource label and put them into their own array for display.
        
        $http.get('/favorites/people')
            .then( function(response){
                console.log('get favorites people: ', response.data);
                
                self.favorites.people.list = response.data;

            })
            .catch( function(error){
                console.log('error getting favorites: ', error);
                
            })
        $http.get('/favorites/species')
            .then( function(response){
                console.log('get favorites species: ', response.data);
                
                self.favorites.species.list = response.data

            })
            .catch( function(error){
                console.log('error getting favorites: ', error);
            
        })
        $http.get('/favorites/planets')
            .then( function(response){
                console.log('get favorites planets: ', response.data);
                
                self.favorites.planets.list = response.data;

            })
            .catch( function(error){
                console.log('error getting favorites: ', error);
                
            })

        $http.get('/favorites/starships')
        .then( function(response){
            console.log('get favorites: ', response.data);
            
            self.favorites.starships.list = response.data;

        })
        .catch( function(error){
            console.log('error getting favorites: ', error);
            
        })
        $http.get('/favorites/vehicles')
            .then( function(response){
                console.log('get favorites: ', response.data);
                
                self.favorites.vehicles.list = response.data;

            })
            .catch( function(error){
                console.log('error getting favorites: ', error);
            
        })
        $http.get('/favorites/films')
            .then( function(response){
                console.log('get favorites: ', response.data);
                
                self.favorites.films.list = response.data;

            })
            .catch( function(error){
                console.log('error getting favorites: ', error);
                
            })    
    }

    self.getFavorites();
















}]); // end service