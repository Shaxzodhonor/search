// CREATE FUNCTIONS

var createCard = function (arr){
    var newCard = elTemplate.cloneNode(true);
    
    $_('.js-card-img', newCard).src = arr.ytimg;
    $_('.js-movie-title', newCard).textContent = arr.title;
    $_('.js-movie-imdb', newCard).textContent = "IMDB Rating : " + arr.imdbRating;
    $_('.js-movie-language', newCard).textContent = "Language : " + arr.language;
    $_('.js-movie-year', newCard).textContent = "Year : " + arr.year;
    $_('.js-watch-movies', newCard).href = "index.html?id=" + arr.id;
    
    return newCard;
}

//=================================
// RENDER FUNCTIONS
//=================================
var count = 0;
var anyArr = [];
var cnt = 0;

var renderFunc  = function(arr) {
    cardsWrapper.innerHTML = '';
    
    if (arr !== anyArr){
        cnt = 0;
        count=0;
    }
    
    if (cnt<1) {
        anyArr = [];
        for (var key in arr) {
            anyArr[key] = arr[key];
        }
        cnt++;
    } 
    var docFragment = document.createDocumentFragment();
    var setArr = arr.slice(count * 21, count * 21 + 21);
    
    setArr.forEach(function (movie){
        docFragment.appendChild(createCard(movie));
    })
    cardsWrapper.appendChild(docFragment);
}


// ===========================
// NEXT === PREW FUNCTIONS
// ============================
var nextFunc = function(){
    count++;
    renderFunc(anyArr)
}
var prewFunc = function(){
    if (count <= 0){
        return
    }
    count--;
    renderFunc(anyArr)
}

// =================
//SORT FUNCTIONS
// =================
//A--Z
var sortAZFunc = function() {
    normalizedMovies.sort(function(a, b){
        var x = a.title; 
        var y =  b.title;
        if (x<y) {return -1}
        if (x>y) {return 1}
        return 0
    })
    renderFunc(normalizedMovies);
}

// Z--A
var sortZAFunc = function() {
    normalizedMovies.sort(function(a, b){
        var x = a.title; 
        var y =  b.title;
        if (x<y) {return 1}
        if (x>y) {return -1}
        return 0
    })
    renderFunc(normalizedMovies);
}

// SORT IMDB
var sortIMDBFunc = function() {
    normalizedMovies.sort(function(a, b){
        var x = a.imdbRating;
        var y =  b.imdbRating
        if (x<y) {return 1}
        if (x>y) {return -1}
        return 0
    })
    renderFunc(normalizedMovies);
}

// SORT YEAR START
var sortYSFunc = function() {
    normalizedMovies.sort(function(a, b){
        var x = a.year; 
        var y =  b.year;
        if (x<y) {return -1}
        if (x>y) {return 1}
        return 0
    })
    renderFunc(normalizedMovies);
}

// SORT YEAR END
var sortYEFunc = function() {
    normalizedMovies.sort(function(a, b){
        var x = a.year; 
        var y =  b.year;
        if (x<y) {return 1}
        if (x>y) {return -1}
        return 0
    })
    renderFunc(normalizedMovies);
}