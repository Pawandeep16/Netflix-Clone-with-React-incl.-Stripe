const apiKey = "85d41a091fee880e75f472f4fc79af57";

const requests = {
  fetrchTrending: `/movies/all/week?api_key=${apiKey}&language=en=US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  fethcTopRated: `/movies/top_rated?api_key=${apiKey}&language=en=US`,
  fetchActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  fetchHorrorMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  fetchComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  fetchDocumentries: `/discover/movie?api_key=${apiKey}&with_genres=99`,
};
export default requests;
