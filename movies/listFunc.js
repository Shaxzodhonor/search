var elFormList = $_('.js-form-list');
var elSearchInput  = $_('.js-search-input');
var elTemplate = $_('#card-template').content;
var cardsWrapper = $_(".js-cards-wrapper");
var elSearchList = $_(".js-search-list");
var searchArr = []; 

var sortAZ = $_(".js-sort-AZ");
var sortZA= $_(".js-sort-ZA");
var sortYearStart= $_(".js-sort-year-start");
var sortYearEnd = $_(".js-sort-year-end");
var sortImdb = $_(".js-sort-imdb");


renderFunc(normalizedMovies);

elSearchInput.addEventListener('input', function(){
        
        var searchText = elSearchInput.value.trim();
        
        elSearchInput.classList.remove("is-invalid");
        elSearchList.classList.remove("d-none");
        
        if (searchText.length == 1) {
            elSearchList.classList.add("d-none");
            return;
        }

        if (searchText.length == 0) {
            
           elSearchList.classList.add("d-none");
           elSearchInput.classList.add("is-invalid");
            return;
        }
        var searchReg = new RegExp(searchText, "gi");

        searchArr = normalizedMovies.filter(function (movie) {
        return movie.title.match(searchReg);
        })
        
        
        if (searchArr.length == 0) {
            elSearchList.classList.add("d-none");
            cardsWrapper.innerHTML = "<div class='h3 text-center bg-danger'> 404 NOT FOUND </div>";
            return;
        }
        elSearchList.innerHTML = '';
        searchArr.forEach(function(movie, index){
           var newItem = createElement('li', 'border ps-3 overflow-hidden w-100 srLiClass', movie.title, elSearchList);
           
           newItem.addEventListener("click", function(){
              
               renderFunc(searchArr.slice(index, index + 1 ));
               elSearchList.classList.add("d-none");
           })
            
        })
           elFormList.addEventListener("submit", function(evt){
               evt.preventDefault();
               elSearchList.classList.add("d-none");
           })
        
        renderFunc(searchArr);
        
})

sortAZ.addEventListener('click', function(){
    
    sortAZFunc();
})
sortZA.addEventListener('click', function(){
    
    sortZAFunc();
})
sortImdb.addEventListener('click', function(){
    sortIMDBFunc();
    
})
sortYearStart.addEventListener('click', function(){
    sortYSFunc();
})
sortYearEnd.addEventListener('click', function(){
    sortYEFunc();
})
