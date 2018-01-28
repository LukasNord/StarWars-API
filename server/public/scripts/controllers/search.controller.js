myApp.controller('SearchController', [ 'SwapiService', function(SwapiService){
    console.log('searchController up');
    let self = this;

//results from API call to be displayed on DOM.
    self.searchResults = SwapiService.searchResults;
//options tree for select
    self.options = [
       
                {label:'Films', resource: 'films'},
                {label: 'People', resource: 'people'},
                {label: 'Planets', resource: 'planets'},
                {label:'Species', resource: 'species'},
                {label:'Starships', resource: 'starships'},
                {label:'Vehicles', resource: 'vehicles'}
            
    ];


//Control for showing card based on resource
    self.toggle = {
        people: false,
        films: false,
        planets: false,
        species: false,
        starships: false,
        vehicles: false
    };
    


//Send search query and resource to the service
    self.searchFor = function(selectedOption){
        
        //validation
        
        
        //logic to control toggle.
            
            let show = self.toggle;
            switch(selectedOption.resource) {
                case 'people':
                    show.people = true;
                    show.films = false;
                    show.starships = false;
                    show.species = false;
                    show.planets = false;
                    show.vehicles = false;
                    break;
                case 'films':
                    show.people = false;
                    show.films = true;
                    show.starships = false;
                    show.species = false;
                    show.planets = false;
                    show.vehicles = false;
                    break;
                case 'starships':
                    show.people = false;
                    show.films = false;
                    show.starships = true;
                    show.species = false;
                    show.planets = false;
                    show.vehicles = false;
                    break;
                case 'species':
                    show.people = false;
                    show.films = false;
                    show.starships = false;
                    show.species = true;
                    show.planets = false;
                    show.vehicles = false;
                    break;
                case 'planets':
                    show.people = false;
                    show.films = false;
                    show.starships = false;
                    show.species = false;
                    show.planets = true;
                    show.vehicles = false;
                    break;
                case 'vehicles':
                    show.people = false;
                    show.films = false;
                    show.starships = false;
                    show.species = false;
                    show.planets = false;
                    show.vehicles = true;
                    break;
            }//end switich
        //send to service
        SwapiService.searchSwapi(selectedOption.resource, selectedOption.searchValue);
         
    }//end searchFor

//add to favorites

    self.addToFavorites = function(favorite){
        
        //add label property to object for easier sorting in the database.
        favorite.label = self.selectedOption.resource;
        
        
        SwapiService.addToFavorites(favorite);
    }
// custom num to string filter






    







}]);//end controller