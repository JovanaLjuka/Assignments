import { getMovies, topRated } from "./modules/film.js";
import { getGenres } from "./modules/genres.js";



const api_url_genres = `https://api.themoviedb.org/3/genre/movie/list?language=en`;
const img_path = `https://image.tmdb.org/t/p/w500/`;
const api_url_movies = `https://api.themoviedb.org/3/`;
const container = document.querySelector(".container");

getGenres(api_url_genres);

document.querySelector("#getSearch").addEventListener("click", function () {
  getM(1);
})

let topRatedM = topRated(api_url_movies);

topRatedM.then(res => {
  renderMovies(res, 1);
})

function getM(page) {

  let query = document.querySelector("#search").value;
  let movies = getMovies(api_url_movies, query, page);

  sessionStorage.setItem("pageP", JSON.stringify({ number: page }));

  movies.then(res => {
    renderMovies(res);
  })
}

function renderMovies(data, pag = 0) {

  if (data.results.length == 0) {

    container.innerHTML = `<p>No data!!!</p>`
    return;
  }
  let html = ``;

  data.results.forEach(element => {

    let im;
    if (element.poster_path) {
      im = img_path + element.poster_path;
    } else {
      im = './img/noimage.png'
    }

    html += `<div class="movie">

<div class="img">
<img src="${im}" alt="${element.original_title}">
</div>

<h2>${element.original_title}</h2>

<p>${getNameGenre(element.genre_ids)}</p>
</div>`


  });

  container.innerHTML = html;
  if (pag == 0) {
    let div = document.createElement("div");
    let link = document.createElement("a");
    if (data.page > 1) {
      link.textContent = "Previous";
      link.addEventListener("click", function () {
        let num = JSON.parse(sessionStorage.getItem("pageP")).number - 1;
        getM(num);
      })
      div.appendChild(link);
    }
    for (let i = 1; i <= data.total_pages; i++) {

      let link = document.createElement("a");


      link.textContent = i + " ";
      link.addEventListener("click", function () {

        getM(i);
      })
      div.appendChild(link);
    }

    if (data.page < data.total_pages) {
      let link2 = document.createElement("a");
      link2.textContent = "Next";
      link2.addEventListener("click", function () {
        let num = JSON.parse(sessionStorage.getItem("pageP")).number + 1;
        getM(num);
      })

      div.appendChild(link2);
    }
    container.appendChild(div);
  }
};

function getNameGenre(array) {

  let size = array.length;
  let genres = JSON.parse(sessionStorage.getItem("genres"));
  let html = '';

  console.log(genres.genres);
  for (let i = 0; i < genres.genres.length; i++) {
    if (array.includes(genres.genres[i].id)) {
      size--;
      html += genres.genres[i].name + ' ';
    }
    if (size == 0) {
      break;
    }
  }

  return html;
}