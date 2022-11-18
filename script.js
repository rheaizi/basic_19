const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?","");
console.log(numberOfFilms);

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};
const a = prompt('Один из последних посмотренных фильмов?','');
const b = prompt('На сколько оцените ее?','');
const c = prompt('Один из последних посмотренных фильмов?','');
const d = prompt('На сколько оцените ее?','');
// personalMovieDB.movies = {
//     a:b,
//     c:d
// };

personalMovieDB.movies[a]=b;
personalMovieDB.movies[c]=d;
console.log(personalMovieDB);