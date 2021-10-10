var createCard = function (arr){
    var newCard = elTemplate.cloneNode(true);

    $_('.js-card-img', newCard).src = arr.ytimg;
    $_('.js-movie-title', newCard).textContent = arr.title;
    $_('.js-movie-imdb', newCard).textContent = "IMDB Rating : " + arr.imdbRating;
    $_('.js-movie-language', newCard).textContent = "Language : " + arr.language;
    $_('.js-movie-year', newCard).textContent = "Year : " + arr.year;
    $_('.js-watch-movies', newCard).href = "index.html?id=" + arr.ytid;
    
    // .addEventListener('click', function(){
    //     fullScreen.src = 'https://www.youtube.com/embed/'+ arr.ytid + '?autoplay=1';  
    // })

    return newCard;
}

window.location.src
var renderFunc  = function(arr) {
    cardsWrapper.innerHTML = '';
    
    var docFragment = document.createDocumentFragment();
    
    arr.forEach(function (movie){
        docFragment.appendChild(createCard(movie));
    })
    cardsWrapper.appendChild(docFragment);
}