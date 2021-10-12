var fullScreen = $_('.full-screen-iframe');
var fullScreenTitle = $_('.js-title');
var fullScreenLanguage = $_('.js-language');
var fullScreenYear = $_('.js-year');
var fullScreenIMDB = $_('.js-imdb');
var fullScreenSummary = $_('.js-summary');

var wrapp = $_('.js-wrapper');
var elForm = $_('.js-form');
var elInput = $_('.js-search');

var fullsd = window.location.search.slice(4);

 
var render = function(array) {

    wrapp.innerHTML = '';
    array.forEach(function(movie, i){
        var elCard = createElement('div', 'card mb-2 border border-1 border-dark rounded-3 img-wrap js-move-card', '', wrapp);
        var wrappIframe = createElement('div', 'card', '', elCard);
        var elImg = createElement('img', '', '', wrappIframe);
        elImg.src = movie.ytimg;
        elImg.setAttribute('width', '260');
        elImg.setAttribute('height', '160');
        var iconWrap = createElement('div', 'youtube-icon d-flex  align-items-center justify-content-center', '',wrappIframe);
        var iconYouTube = createElement('img', '', '', iconWrap);
        iconYouTube.src = "./img/yotu.png";
        iconYouTube.setAttribute('width', '70');
        iconYouTube.setAttribute('height', '50');
        var cardContentWrap = createElement('div', 'p-2', '', elCard)
        var title = createElement('p', 'h5 card-title text-decoration-underline text-center movies__title m-0 mt-1', movie.title, cardContentWrap);
        var imdbRating = createElement('p', 'h6 card-text text-danger  m-0 mt-1', 'IMDB rating : ' + movie.imdbRating, cardContentWrap);
        var language = createElement('p', 'h6 card-text  m-0 mt-1', 'Language : ' + movie.language, cardContentWrap);
        var year = createElement('p', 'h6 card-text  m-0 mt-1', 'Year : ' + movie.year, cardContentWrap);

        elCard.addEventListener('click', function() {
            window.scrollTo(0, 190);
            fullScreen.src = 'https://www.youtube.com/embed/'+ movie.ytid + '?autoplay=1';  
            fullScreenTitle.textContent = movie.title;
            fullScreenLanguage.textContent = movie.language;
            fullScreenYear.textContent = movie.year
            fullScreenSummary.textContent = movie.summary;
            fullScreenIMDB.textContent = movie.imdbRating;
            
            var arr= [];
            arr.push(array[i]);
            array.splice(i, 1);
            array.unshift(arr[0]);
            render(array);
        })
        
    })

}

var searchMovies = function (evt) {
    evt.preventDefault();

    var searchReg = elInput.value.trim();
    var searchRegex = new RegExp(searchReg, 'gi');

    if (elInput.value.trim() === "") {
        elInput.value = "";
        elInput.focus();
        alert('Kinoni nomini yozing!');
        return;
    } 
    if (searchReg.length <= 1) {
        return
    }

    var moviesSearch = normalizedMovies.filter(function (movie) {
        return movie.title.match(searchRegex);
    });

    render(moviesSearch);
};

elForm.addEventListener('submit', searchMovies);

render(normalizedMoviesLittle); 
var searchFullScreen = normalizedMovies.filter(function(movie){
    return movie.id == fullsd;
})

fullScreen.src = 'https://www.youtube.com/embed/'+ searchFullScreen[0].ytid + '?autoplay=1';  
fullScreenTitle.textContent = searchFullScreen[0].title;
fullScreenLanguage.textContent = searchFullScreen[0].language;
fullScreenYear.textContent = searchFullScreen[0].year
fullScreenSummary.textContent = searchFullScreen[0].summary;
fullScreenIMDB.textContent = searchFullScreen[0].imdbRating;
window.scrollTo(0, 190);
