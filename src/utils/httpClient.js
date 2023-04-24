/*  URL fija de la API  */
const API = "https://api.themoviedb.org/3";

export const get = (path) => {
    return fetch(API + path, {
        headers: {
            Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmZjA2NmUyZGM1M2ZkMDQwZmNhNjY2OWU5M2RhYjUxNCIsInN1YiI6IjY0MjM3YTAwOGRlMGFlMDBmNGJkYThhNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._RhJcoiH4EAFfCZBkZs2HTdk_jZxy5OwFa10IplArvY",
            "Content-Type": "application/json;charset=utf-8"
        }
    }).then(results => results.json())
};



