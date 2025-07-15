
let historial;
let maxPage;
let page = 1;


searchBtn.addEventListener('click', () => {
    location.hash = '#search=' + searchFormInput.value;;

});
seeAllMovie.addEventListener('click', () => {
    location.hash = '#trendsMovie';
});
seeAllTv.addEventListener('click', () => {
    location.hash = '#trendsTv';
});


backButton.addEventListener('click', () => {
    history.back();
})

window.addEventListener('DOMContentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);


window.addEventListener('popstate', () => {
  // Si no hay un hash en la URL, recargar la página
  if (window.location.hash === '') {
      window.location.reload();
      console.log("Página recargada después de navegar hacia atrás");
  }
});

function navigator(){
    console.log({location});

    if(location.hash.startsWith('#trendsMovie')){
        trendsPageMovie();
    } else if(location.hash.startsWith('#trendsTv')){
        trendsPageTv();
    }else if(location.hash.startsWith('#search=')){
        searchPage();

    }else if(location.hash.startsWith('#movie=')){
        movieDetailsPage();

    }else if(location.hash.startsWith('#tv=')){
        tvDetailsPage();

    }else if(location.hash.startsWith('#category=')){
        categoryPage();
    }else{
        homePage();
    }
    window.scrollTo(0, 0);
}

function homePage(){
    console.log('Recargar 1 vez');
    backButton.classList.add('hide');
    getTrendingMoviesPreview();
    getTrendingTvPreview();
    getCategoriesPreview();
    movies.classList.add('hide');
    detail.classList.add('hide');
}


function movieDetailsPage(){
    console.log('MOVIE DETAILS!!');
    movies.style.display='none'
    backButton.classList.remove('hide');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
    detail.classList.remove('hide');

    const [_, movieId] = location.hash.split('=') //=>['#movie', 'id']

    getMovieDetail(movieId);
}


function tvDetailsPage(){
    console.log('TV DETAILS!!');
    
    backButton.classList.remove('hide');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
    detail.classList.remove('hide');

    const [_, tvId] = location.hash.split('=') //=>['#movie', 'id']

    getTvDetail(tvId);
}


function searchPage(){
    console.log('SEARCH!!');
    backButton.classList.remove('hide');
    
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
    movies.classList.remove('hide');

    const [_, query] = location.hash.split('=') //=>['#category', 'id-name']
    getMoviesBySearch(query);

}
function trendsPageMovie(){
    backButton.classList.remove('hide');

    movies.classList.remove('hide');
    console.log('TREENDS Movies!!');
    search.classList.add('hide');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';

    getMovieTrends();
}

function trendsPageTv(){
    backButton.classList.remove('hide');

    movies.classList.remove('hide');
    console.log('TREENDS TV!!');
    search.classList.add('hide');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
    
    getTvTrends();
}


function categoryPage(){
    console.log('CATEGORY!!');
    backButton.classList.remove('hide');
    trendingMovies.style.display = 'none';
    trendingTvs.style.display = 'none';
    categoriesContainer.style.display = 'none';
    
    detail.classList.add('hide');
    
    movies.style.display='block'
    const [_, categoryData] = location.hash.split('=') //=>['#category', 'id-name']
    const [id, name] = categoryData.split('-');
    tituloMovieCategory.innerHTML = name;

    getMoviesByCategory(id);

}

