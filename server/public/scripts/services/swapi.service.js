myApp.service('SwapiService', ['$http', function($http){
    console.log('swapi service loaded');
    
    let self = this;
    
    self.searchResults ={ list: [] };
    self.starWarsFilm ={};
    
    //pass resource and search query to a GET request to swapi
    self.searchSwapi = function(resource, searchValue){
        //set value of search query
        const config = {
            params: {search: searchValue}
        };
        
        $http.get(`https://www.swapi.co/api/${resource}`, config).then( function(response){
            console.log('searchResults: ', response.data.results);
            self.searchResults.list = response.data.results;
            
        })
    };























}]); // end service