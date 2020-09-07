const reloadButton = document.getElementById("reloadButton");
const titleHeader = document.getElementById("titleHeader");
const titleText = document.getElementById("titleText");
const yearHeader = document.getElementById("yearHeader");
const yearText = document.getElementById("yearText");
const descriptionHeader = document.getElementById("descriptionHeader");
const desriptionText = document.getElementById("descriptionText");
const sourceText = document.getElementById("sourceText");
const yearMetadata = document.getElementById("yearMetadata");
const descriptionMetadata = document.getElementById("descriptionMetadata");

// Search Options
const searchPagesRange = 1000;
const resultsAmount = 10;

const randomPageNumber = () => {
  return Math.floor(Math.random() * searchPagesRange);
};

// const searchUrl = `https://archive.org/advancedsearch.php?q=-title:(filmcollectief,+stock+footage)+AND+collection:(moviesandfilms)+AND+mediatype:(movies)&fl[]=identifier&fl[]=title&fl[]date&sort[]=__random+desc&sort[]=&sort[]=&rows=${resultsAmount}&page=${randomPageNumber()}&output=json`;

const searchUrl = `https://archive.org/advancedsearch.php?q=-title:(filmcollectief,+stock+footage)+AND+collection:(moviesandfilms)+AND+mediatype:(movies)&sort[]=__random+desc&sort[]=&sort[]=&rows=${resultsAmount}&page=${randomPageNumber()}&output=json`;

console.log(searchUrl);

// Player Options
const playerOptions = {
  controls: true,
  autoplay: "any",
  preload: "auto",
  aspectRatio: "16:9",
  language: "en",
  userActions: {
    hotkeys: true,
  },
};

function onPlayerLoaded() {
  document.getElementById("loading").remove();
  player.addClass("add-opacity");
  document.querySelector(".btn-reload").classList.add("add-opacity");
  loadVideo();
}

// Define Player Window
const player = videojs(
  document.querySelector(".video-js"),
  playerOptions,
  onPlayerLoaded
);

// Trigger Video Reload on Error
player.on("error", () => {
  loadVideo();
});

// Trigger Video Reload on Video End
player.on("ended", () => {
  loadVideo();
});

reloadButton.onclick = loadVideo;

// Load Video
async function loadVideo() {
  player.pause();
  const response = await fetch(searchUrl);
  const data = await response.json();
  const films = data.response.docs;

  let sourceList = await makeSourceList(films[0]);

  fillMetaData(films[0]);
  player.src(sourceList);
}

function fillMetaData(film) {
  const title = film.title;
  const year = film.year;
  const description = film.description;
  const id = film.identifier;
  const sourceUrl = `https://archive.org/details/${id}`;

  titleText.textContent = title;
  sourceText.setAttribute("href", sourceUrl);
  sourceText.textContent = sourceUrl;

  if (year !== undefined) {
    yearMetadata.innerHTML = `<h3 class="metadata__header" id="yearHeader">year:</h3>
    <span id="yearText" class="metadata__text">${year}</span>`;
  }
  if (description !== undefined) {
    descriptionMetadata.innerHTML = `<h3 class="metadata__header" id="descriptionHeader">description:</h3>
    <span id="descriptionText" class="metadata__text">${description}</span>`;
  }
}

async function makeSourceList(film) {
  const identifier = film.identifier;

  const response = await fetch(
    `https://archive.org/metadata/${identifier}/files`
  );
  const data = await response.json();
  const fileList = data.result;
  let sourcesArray = [];

  fileList.forEach((file) => {
    if (file.format === "h.264" || file.format === "MPEG4") {
      sourcesArray.push({
        src: `https://archive.org/download/${identifier}/${file.name}`,
        type: "video/mp4",
      });
    } else if (file.format === "Ogg Video") {
      sourcesArray.push({
        src: `https://archive.org/download/${identifier}/${file.name}`,
        type: "video/ogg",
      });
    }
  });

  return sourcesArray;
}
