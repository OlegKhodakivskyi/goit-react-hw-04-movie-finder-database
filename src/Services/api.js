import axios from "axios";

const baseURL = `https://api.themoviedb.org/3`;
const ApiKey = `203ff930413d2a188176d2ed824b39a9`;

export default {
  getTrending() {
    return axios
      .get(`${baseURL}/trending/all/week?api_key=${ApiKey}`)
      .then(({ data }) => {
        return data.results;
      });
  },

  searchMovie(query, page = 1) {
    return axios.get(
      `${baseURL}/search/movie?api_key=${ApiKey}&language=en-US&query=${query}&page=${page}&include_adult=false`
    );
  },

  getMovieInfo(movie_id) {
    return axios.get(
      `${baseURL}/movie/${movie_id}?api_key=${ApiKey}&language=en-US`
    );
  },

  getMovieCast(movie_id) {
    return axios.get(`${baseURL}/movie/${movie_id}/credits?api_key=${ApiKey}`);
  },

  getReviews(movie_id) {
    return axios.get(
      `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${ApiKey}&language=en-US&page=1`
    );
  },
};
