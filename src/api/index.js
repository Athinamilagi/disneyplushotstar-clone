const BASE_URL = "https://api.themoviedb.org/3/movie/popular";
const API_KEY = "?api_key=ad0da639ade7e22dd005f4dcabfe5baf";

const API_URL_REC = `${BASE_URL}${API_KEY}`;

console.log(API_URL_REC);

export async function recommendedMovies() {
  let res = await fetch(API_URL_REC)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    })
    .catch((err) => console.log(err));
  
    return res;
}
