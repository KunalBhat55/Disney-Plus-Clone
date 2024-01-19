import axios from "axios";

const movieBaseUrl = import.meta.env.VITE_API_URL;
const api_key = import.meta.env.VITE_API_KEY;

const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`;

export async function getTrendingVideos() {
  const getVideos = await axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);
  return getVideos.data.results;
}
export async function getMovieByGenreId(id) {
  const getMovies = await axios.get(movieByGenreBaseURL + "&with_genres=" + id)
  return getMovies.data.results
}


