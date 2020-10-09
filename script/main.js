const reloadButton = document.getElementById("reloadButton");

const titleText = document.getElementById("titleText");
const sourceText = document.getElementById("sourceText");
const yearMetadata = document.getElementById("yearMetadata");
const descriptionMetadata = document.getElementById("descriptionMetadata");

// Search Options
let searchPagesRange = 1000;
const resultsAmount = 10;

let collectionName = "moviesandfilms";

const randomPageNumber = () => {
  return Math.floor(Math.random() * searchPagesRange);
};

const getSearchUrl = () => {
  const searchUrl = `https://archive.org/advancedsearch.php?q=-title:(filmcollectief,+stock+footage)+AND+collection:(${collectionName})+AND+mediatype:(movies)&sort[]=__random+desc&sort[]=&sort[]=&rows=${resultsAmount}&page=${randomPageNumber()}&output=json`;

  return searchUrl;
};

// Player Options
const playerOptions = {
  controls: true,
  preload: "auto",
  aspectRatio: "16:9",
  language: "en",
  userActions: {
    hotkeys: true,
  },
};

function onPlayerLoaded() {
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

// Handle Button Clicks
reloadButton.onclick = () => {
  loadVideo();
};

// Load Video
async function loadVideo() {
  player.pause();
  const response = await fetch(getSearchUrl());
  const data = await response.json();
  const filmMetadata = data.response.docs[0];
  const filmId = filmMetadata.identifier;

  const fileList = await getFileList(filmId);
  const sourceList = await getSourceList(fileList, filmId);

  fillMetaData(filmMetadata);
  player.src(sourceList);
}

function fillMetaData(film) {
  const title = film.title;
  const year = film.year;
  const description = film.description;
  const id = film.identifier;
  const sourceUrl = `https://archive.org/details/${id}`;

  titleText.textContent = title;
  sourceText.textContent = sourceUrl;
  sourceText.setAttribute("href", sourceUrl);

  if (year !== undefined) {
    yearMetadata.innerHTML = `<h3 class="metadata__header" id="yearHeader">year:</h3>
    <span id="yearText" class="metadata__text">${year}</span>`;
  }
  if (description !== undefined) {
    descriptionMetadata.innerHTML = `<h3 class="metadata__header" id="descriptionHeader">description:</h3>
    <span id="descriptionText" class="metadata__text">${description}</span>`;
  }
}

async function getFileList(filmId) {
  const response = await fetch(`https://archive.org/metadata/${filmId}/files`);
  const data = await response.json();
  const fileList = data.result;

  return fileList;
}

async function getSourceList(fileList, filmId) {
  let sourcesArray = [];

  fileList.forEach((file) => {
    if (file.format === "h.264" || file.format === "MPEG4") {
      sourcesArray.push({
        src: `https://archive.org/download/${filmId}/${file.name}`,
        type: "video/mp4",
      });
    } else if (file.format === "Ogg Video") {
      sourcesArray.push({
        src: `https://archive.org/download/${filmId}/${file.name}`,
        type: "video/ogg",
      });
    }
  });

  return sourcesArray;
}
