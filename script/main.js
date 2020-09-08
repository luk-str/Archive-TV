const reloadButton = document.getElementById("reloadButton");
const featureFilmsButton = document.getElementById("featureFilmsButton");
const newsButton = document.getElementById("newsButton");
const sciFiButton = document.getElementById("sciFiButton");
const tvButton = document.getElementById("tvButton");

const titleText = document.getElementById("titleText");
const sourceText = document.getElementById("sourceText");
const collectionText = document.getElementById("collectionText");
const yearMetadata = document.getElementById("yearMetadata");
const descriptionMetadata = document.getElementById("descriptionMetadata");

// Search Options
let searchPagesRange = 1000;
const resultsAmount = 10;

let collectionName = "moviesandfilms";

const randomPageNumber = () => {
  return Math.floor(Math.random() * searchPagesRange);
};

const getSearchUrl = (collectionName) => {
  const searchUrl = `https://archive.org/advancedsearch.php?q=-title:(filmcollectief,+stock+footage)+AND+collection:(${collectionName})+AND+mediatype:(movies)&sort[]=__random+desc&sort[]=&sort[]=&rows=${resultsAmount}&page=${randomPageNumber()}&output=json`;

  console.log(searchUrl);
  return searchUrl;
};

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
  loadVideo(collectionName);
}

// Define Player Window
const player = videojs(
  document.querySelector(".video-js"),
  playerOptions,
  onPlayerLoaded
);

// Trigger Video Reload on Error
player.on("error", () => {
  loadVideo(collectionName);
});

// Trigger Video Reload on Video End
player.on("ended", () => {
  loadVideo(collectionName);
});

// Handle Button Clicks
reloadButton.onclick = () => {
  loadVideo(collectionName);
};

featureFilmsButton.onclick = () => {
  collectionName = "feature_films";
  searchPagesRange = 100;
  loadVideo(collectionName);
};

newsButton.onclick = () => {
  collectionName = "newsandpublicaffairs";
  searchPagesRange = 1000;
  loadVideo(collectionName);
};

sciFiButton.onclick = () => {
  collectionName = "SciFi_Horror";
  searchPagesRange = 45;
  loadVideo(collectionName);
};

tvButton.onclick = () => {
  collectionName = "television";
  searchPagesRange = 1000;
  loadVideo(collectionName);
};

// Load Video
async function loadVideo(collectionName) {
  console.log(collectionName);
  player.pause();
  const response = await fetch(getSearchUrl(collectionName));
  const data = await response.json();
  const filmMetadata = data.response.docs[0];
  console.log(filmMetadata);
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

  switch (collectionName) {
    case "moviesandfilms":
      collectionText.textContent = "Movies and Films";
      break;
    case "feature_films":
      collectionText.textContent = "Feature Films";
      break;
    case "newsandpublicaffairs":
      collectionText.textContent = "News & Public Affairs";
      break;
    case "SciFi_Horror":
      collectionText.textContent = "Sci-Fi / Horror";
      break;
    case "television":
      collectionText.textContent = "TV Archive";
  }

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
