const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    header: {
        'content-type': 'application/json;charset=utf-8',
    },
    params:{
        'api_key': API_KEY,
    },
});

//Utils
function createMovies(movies, container, clean ){
    if(clean){
        container.innerHTML='';
    }
    movies.forEach(element => {
        let movie = `
        <div class="movie-container">
            <img
            src="https://image.tmdb.org/t/p/w300${element.poster_path}"
            class="movie-img"
            alt="${element.title}"
            onclick="SelectionMovieForDetail(${element.id})"
            />
            <p class="title" >${element.title}</p>
        </div>
        `
        container.innerHTML += movie;
    });
}

function SelectionMovieForDetail(id){
    location.hash = `#movie=${id}`;
}

function createTvs(tvs, container){
    container.innerHTML='';
    tvs.forEach(element => {
        let tv = `
        <div class="tv-container">
            <img
            src="https://image.tmdb.org/t/p/w300${element.poster_path}"
            class="tv-img"
            alt="${element.name}"
            onclick="SelectionTvForDetail(${element.id})"
            />
            <p class="title" >${element.name}</p>
        </div>
        `
        container.innerHTML += tv;
    });
}

function SelectionTvForDetail(id){
    location.hash = `#tv=${id}`;
}

function createCategories(categories, container){
    container.innerHTML='';
    categories.forEach(element => {
        let categorie = `
            <div class="category-container">
                    <h3 
                        id="id${element.id}" 
                        class="category-title"
                        onclick="SelectionMoviesForCategory(${element.id}, '${element.name}')"
                    >${element.name}</h3>
            </div>
        `
        container.innerHTML += categorie;
    });
}


function SelectionMoviesForCategory(id, name){
    location.hash = "#category=" + id + "-" + name;
}


async function getTrendingMoviesPreview(){
    trendingContainerMovies.innerHTML = '';
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    createMovies(movies, trendingContainerMovies);
}

async function getMovieTrends(){
    const { data } = await api('trending/movie/day');
    const movies = data.results;

    createMovies(movies, listMoviesOrTvs, true);

    const btn = document.createElement('button');
    btn.innerHTML = 'Load More';
    
    btn.onclick = () => {
        
        getMoreMoviesTrending();
    }
    listMoviesOrTvs.appendChild(btn);
}

let pages=1;

async function getMoreMoviesTrending(){
    pages++;
    const { data } = await api('trending/movie/day', {
        params:{
            pages:2,
        }
    });
    const movies = data.results;
    createMovies(movies, listMoviesOrTvs);
    const btn = document.createElement('button');
    btn.innerHTML = 'Load More';
    
    btn.onclick = () => {
        
        getMoreMoviesTrending();
    }
    listMoviesOrTvs.appendChild(btn);
}


async function getTrendingTvPreview(){
    const { data } = await api('trending/tv/day');
    const tvs = data.results;    
    createTvs(tvs, trendingContainerTvs);
}
async function getTvTrends(){
    const { data } = await api('trending/tv/day');
    const tvs = data.results;    
    createTvs(tvs, listMoviesOrTvs);
}


async function getCategoriesPreview(){
    const {data} = await api('genre/movie/list');
    const categories = data.genres
    createCategories(categories, categoriesListContainer);
}




async function getMoviesByCategory(id){
    const { data } = await api('discover/movie', {
        params:{
            with_genres : id,
        }
    });
    const movies = data.results;
    createMovies(movies, listMoviesOrTvs );
}


async function getMoviesBySearch(query){
    const { data } = await api('search/movie', {
        params:{
            query,
        }
    });
    const movies = data.results;
    createMovies(movies, listMoviesOrTvs );
}

async function getMovieDetail(id){
    
    const { data } = await api(`movie/${id}`);
    const movie = data;
    console.log(movie);
    
    titleMovie.innerHTML = movie.title;
    
    movieDetailScore.textContent = movie.status;
    releaseDate.innerHTML = movie.release_date
    popularity.innerHTML = movie.popularity
    voteAverage.innerHTML = movie.vote_average
    voteCount.innerHTML = movie.vote_count
    moviedescription.innerHTML = movie.overview
    movieDetailImg.src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`

    createCategories( movie.genres, categorysMovieSelect);

    getRelatedMoviesbyId(id)
}

async function getRelatedMoviesbyId(id){
    const data = await api(`/movie/${id}/similar`)
    let similar = data.data.results;
    createMovies(similar, MoviesOrTvSimilars);
    MoviesOrTvSimilars.scroll(0,0);
}




 

async function getTvDetail(id){
    

    const { data } = await api(`tv/${id}`);
    const tv = data;
    console.log(tv);
    
    titleMovie.innerHTML = tv.name;
    
    movieDetailScore.textContent = tv.status;
    releaseDate.innerHTML = tv.first_air_date;
    popularity.innerHTML = tv.popularity;
    voteAverage.innerHTML = tv.vote_average;
    voteCount.innerHTML = tv.vote_count;
    moviedescription.innerHTML = tv.overview;
    movieDetailImg.src = `https://image.tmdb.org/t/p/w300${tv.poster_path}`;

    createCategories( tv.genres, categorysMovieSelect);
    getRelatedTvbyId(id)
}

async function getRelatedTvbyId(id){
    const data = await api(`/tv/${id}/similar`)
    let similar = data.data.results;
    console.log(data)
    console.log(similar)
    createTvs(similar, MoviesOrTvSimilars);
    MoviesOrTvSimilars.scroll(0,0);
}
