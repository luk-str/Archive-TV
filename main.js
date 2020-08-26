function getRandomFilm(films) {
  const randomId = Math.floor(Math.random() * films.length);
  return films[randomId];
}

function generateFetchUrl() {
    const randomPageNumber = Math.floor(Math.random() * 1000);
    return `https://archive.org/advancedsearch.php?q=-title%3A%28filmcollectief%29+AND+collection%3A%28moviesandfilms%29+AND+mediatype%3A%28movies%29&fl%5B%5D=identifier&fl%5B%5D=title&fl%5B%5D=date&sort%5B%5D=__random+desc&sort%5B%5D=&sort%5B%5D=&rows=10&page=${randomPageNumber}&output=json`
}

fetch(
    generateFetchUrl()
)
  .then((response) => response.json())
  .then((data) => {
    const films = data.response.docs;

    const randomFilm = getRandomFilm(films);
    console.log(randomFilm.title);
    const filmDate = new Date(randomFilm.date).getFullYear() || "unknown";
    console.log(filmDate);

    document.getElementById("title").innerHTML = `title: <strong>${randomFilm.title}</strong>`;
    document.getElementById("year").innerHTML = `year: <strong>${filmDate}</strong>`;

    const filmUrl = `https://archive.org/embed/${randomFilm.identifier}&autoplay=1`;

    document.getElementById("loading").remove();
    document.getElementById("player").setAttribute("src", filmUrl);
  });
