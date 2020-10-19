const welcomeContainer = document.getElementById("welcomeContainer");
const okButton = document.getElementById("okButton");
const nav = document.querySelector("nav");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const reloadButton = document.getElementById("reloadButton");
const loadingContainer = document.querySelector(".loading__container");
const titleText = document.getElementById("titleText");
const sourceText = document.getElementById("sourceText");
const yearMetadata = document.getElementById("yearMetadata");
const descriptionMetadata = document.getElementById("descriptionMetadata");

const searchPagesRange = 100;
const resultsPerPage = 10;
const collections = [
  "short_films",
  "feature_films",
  "prelinger",
  "classic_tv",
  "classic_tv_commercials",
  "movie_trailers",
  "FedFlix",
  "open_mind",
  "openmediaproject",
  "bliptv",
  "educationalfilms",
  "avgeeks",
  "vhsvault",
  "musicvideobin",
];

const playerOptions = {
  controls: true,
  preload: "auto",
  aspectRatio: "16:9",
  language: "en",
  userActions: {
    hotkeys: true,
  },
};

const player = videojs(document.querySelector(".video-js"), playerOptions);
player.on("ended", () => loadNewVideo());
player.on("error", () => loadNewVideo());

okButton.onclick = () => {
  hideWelcomeContainer();
  loadNewVideo();
  initializeInterface();
};
reloadButton.onclick = () => loadNewVideo();

function hideWelcomeContainer() {
  welcomeContainer.classList.add("hidden");
}

function initializeInterface() {
  nav.classList.add("visible");
  main.classList.add("visible");
  footer.classList.add("visible");
}

async function loadNewVideo() {
  hideInterface();
  player.pause();

  const response = await fetch(getSearchUrl());
  const data = await response.json();
  const videoMetadata = data.response.docs[0];
  const videoId = videoMetadata.identifier;

  const fileList = await getFileList(videoId);
  const sourceList = getSourceList(fileList, videoId);

  player.src(sourceList);

  player
    .play()
    .then(fillMetaData(videoMetadata))
    .catch((err) => console.log(err));

  showInterface();
}

function hideInterface() {
  main.classList.add("hidden");
  reloadButton.classList.add("hidden");
  loadingContainer.classList.add("visible");
}

function showInterface() {
  loadingContainer.classList.remove("visible");
  main.classList.remove("hidden");
  reloadButton.classList.remove("hidden");
}

const getSearchUrl = () =>
  `https://archive.org/advancedsearch.php?q=collection:(${getRandomCollection()})+AND+mediatype:(movies)&sort[]=__random+desc&sort[]=&sort[]=&rows=${resultsPerPage}&page=${getRandomPageNumber()}&output=json`;

const getRandomPageNumber = () => Math.floor(Math.random() * searchPagesRange);
const getRandomCollection = () =>
  collections[Math.floor(Math.random() * collections.length)];

function fillMetaData(film) {
  resetMetadata();

  const title = film.title;
  const year = film.year;
  const description = film.description;
  const id = film.identifier;
  const sourceUrl = `https://archive.org/details/${id}`;

  titleText.textContent = title;
  sourceText.textContent = sourceUrl;
  sourceText.setAttribute("href", sourceUrl);

  if (year !== undefined) {
    yearMetadata.innerHTML = `<p class="metadata__header" id="yearHeader">year:</p>
    <span id="yearText" class="metadata__text">${year}</span>`;
  }
  if (description !== undefined) {
    descriptionMetadata.innerHTML = `<p class="metadata__header" id="descriptionHeader">description:</p>
    <span id="descriptionText" class="metadata__text">${description}</span>`;
  }
}

function resetMetadata() {
  yearMetadata.innerHTML = "";
  descriptionMetadata.innerHTML = "";
}

async function getFileList(filmId) {
  const response = await fetch(`https://archive.org/metadata/${filmId}/files`);
  const data = await response.json();
  const fileList = data.result;

  return fileList;
}

function getSourceList(fileList, filmId) {
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

  if (sourcesArray.length === 0) {
    loadNewVideo();
  } else {
    return sourcesArray;
  }
}
