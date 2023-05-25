import fetch from "node-fetch";
const url = "https://plankton-app-xhkom.ondigitalocean.app/api";
const imdb_url_rate = "https://imdb8.p.rapidapi.com/title/get-ratings?tconst=";
const urlForOneScreening =
  "https://plankton-app-xhkom.ondigitalocean.app/api/screenings/?pagination[pageSize]=100&filters[movie]=";
const postReview_url = "https://plankton-app-xhkom.ondigitalocean.app/api/";

//fetches IMDB rating of a specific movie.
export async function fetchIMDBRate(imdbId) {
  const res = await fetch(imdb_url_rate + `${imdbId}`, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "imdb8.p.rapidapi.com",
      "x-rapidapi-key": "af96dcaadamshc062cb2b3787501p1d32a7jsnc52680263752",
    },
  });
  const payload = await res.json();
  return payload;
}

//fetches all the movies from API
export async function fetchAllMovies() {
  const res = await fetch(url + "/movies");
  const payload = await res.json();
  return payload.data;
}

//fetches a specific movie from API
export async function fetchChosenMovie(id) {
  const res = await fetch(url + `/movies/${id}`);
  const payload = await res.json();
  return payload.data;
}
export async function fetchReviews(movieId) {
  const res = await fetch(
    url +
      "/reviews" +
      `?pagination[pageSize]=1000&filters[movie]=${movieId}&pagination[page]=1`
  );
  const payload = await res.json();
  return payload.data;
}
export async function fetchAllScreenings() {
  const res = await fetch(url + "/screenings?populate=movie&pagination");
  return await res.json();
}

//fetches screenings for specific movie from API
export async function screeningsLoad(sId) {
  try {
    const response = await fetch(urlForOneScreening + `${sId}`);
    const payload = await response.json();
    return payload.data;
  } catch (error) {
    console.log("oh no 😢");
  }
}

//POSTs data from klient to CMS API
export async function postData(url, data) {
  try {
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
      referrerPolicy: "no-referrer",
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    // console.log(error);
    return { status: "failed" };
  }
}

export default {
  fetchAllMovies: fetchAllMovies,
  fetchChosenMovie: fetchChosenMovie,
  fetchReviews: fetchReviews,
  screeningsLoad: screeningsLoad,
  fetchIMDBRate: fetchIMDBRate,
  postData: postData,
  fetchAllScreenings: fetchAllScreenings,
};
