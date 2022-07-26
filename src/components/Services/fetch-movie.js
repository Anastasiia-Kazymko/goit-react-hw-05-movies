const key = '1e3bd345eb5d29ac0f4521d096bb0e9d';

//------ Популярні фільми---

export function popularFilm() {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${key}&page=1`
  ).then(respons => respons.json());
}

//------- Пошук за ключовим словом----

export function findWordKey(word, page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=${word}&page=${page}`
  ).then(respons => respons.json());
}

//------- Пошук по ід карти----
export function findMovieId(idCard) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${idCard}?api_key=${key}&language=en-US`
  ).then(respons => respons.json());
}
