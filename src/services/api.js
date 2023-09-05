import axios from "axios"

const BASE_URL = 'https://api.themoviedb.org/3/'
const APY_KEY = '947063cb21dc43f96b1dae6bc5cb5f93'

export const fetchMovieTrend = async () => {
    const {data} = await axios.get(`${BASE_URL}trending/movie/day?api_key=${APY_KEY}`);
    return data;
}


export const fetchMovieDetails = async (movieId) => {
    const {data} = await axios.get(`${BASE_URL}movie/${movieId}?api_key=${APY_KEY}`);
    return data;
}

export const fetchCredits = async (movieId) => {
    const {data} = await axios.get(`${BASE_URL}movie/${movieId}/credits?api_key=${APY_KEY}`);
    return data;
}

export const fetchReviews = async (movieId) => {
    const {data} = await axios.get(`${BASE_URL}movie/${movieId}/reviews?api_key=${APY_KEY}`);
    return data;
}

export const fetchSearchMovies = async (query) => {
    const {data} = await axios.get(`${BASE_URL}search/movie?query=${query}&api_key=${APY_KEY}`);
    return data;
}
