var $_ = function (selector, node = document) {
    return node.querySelector(selector);
} 
var $$_ = function (selector, node = document) {
    return node.querySelectorAll(selector);
}

var createElement = function (element, elClass, content, node = null) {
    var element = document.createElement(element);
    element.setAttribute('class', elClass);
    if (content) {
        element.textContent = content;
    }
    if (node !== null ) {
        node.appendChild(element);
    }
    return element;
}

// normalized movies

var normalizedMovies = movies.map(function (movie, index) {
    return {
        ytimg: `http://i3.ytimg.com/vi/${movie.ytid}/hqdefault.jpg`,
        id: index + 1,
        title: movie.Title.toString(),
        year: movie.movie_year,
        categories: movie.Categories.split('|').join(', '),
        imdbRating: movie.imdb_rating,
        language: movie.language,
        ytid: movie.ytid,
        summary: movie.summary,
        youtubeId: `https://www.youtube.com/watch?v=${movie.ytid}`,
    };
});

var normalizedMoviesLittle = normalizedMovies.slice(0, 10);