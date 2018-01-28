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
        {label:'Vehicles', resource: 'vehicle'}
    ];


//Control for showing card based on resource
    self.toggle = {};
    self.toggle.people = false;
    self.toggle.films = false;


//Send search query and resource to the service
    self.searchFor = function(selectedOption){
        //logic to control toggle.
        





        console.log('selectedOption: ,' , selectedOption);
        
        SwapiService.searchSwapi(selectedOption.resource, selectedOption.searchValue);
        
    }










    /*People response format
    {
    "birth_year": "19 BBY",
    "eye_color": "Blue",
    "films": [
        "https://swapi.co/api/films/1/",
        ...
    ],
    "gender": "Male",
    "hair_color": "Blond",
    "height": "172",
    "homeworld": "https://swapi.co/api/planets/1/",
    "mass": "77",
    "name": "Luke Skywalker",
    "skin_color": "Fair",
    "created": "2014-12-09T13:50:51.644000Z",
    "edited": "2014-12-10T13:52:43.172000Z",
    "species": [
        "https://swapi.co/api/species/1/"
    ],
    "starships": [
        "https://swapi.co/api/starships/12/",
        ...
    ],
    "url": "https://swapi.co/api/people/1/",
    "vehicles": [
        "https://swapi.co/api/vehicles/14/"
        ...

    */








}]);//end controller