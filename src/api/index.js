const API_KEY = "?api_key=ad0da639ade7e22dd005f4dcabfe5baf";

export async function imageUrl(req) {
  let res = await fetch(`https://image.tmdb.org/t/p/original${req}${API_KEY}`)
    .then((res) => {
      return res.url;
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
}
export async function videoUrl(req) {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${req}/videos${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      const filteredResults = data.results.filter(
        (dta) => dta.name === "Official Trailer"
      );
      console.log(filteredResults[0]);
      return filteredResults[0];
    })
    .catch((err) => {
      console.log(err);
    });
  return res;
}

export async function certification(req) {
  let res = await fetch(
    `https://api.themoviedb.org/3/movie/${req}/release_dates${API_KEY}`
  )
    .then((res) => res.json())
    .then((data) => {
      return data.results[11].release_dates[0].certification;
    })
    .catch((err) => {
      console.log(err);
    });

  return res;
}
export async function getMovies(req) {
  const BASE_URL = `https://api.themoviedb.org/3/movie/${req}${API_KEY}`;
  let res = await fetch(BASE_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((err) => console.log(err));

  return res;
}
