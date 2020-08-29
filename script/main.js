// Search Options
const searchPagesRange = 1000;
const resultsAmount = 10;

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

// Functions
function getRandomPageNumber() {
  return Math.floor(Math.random() * searchPagesRange);
}

function generateSearchURL() {
  return `https://archive.org/advancedsearch.php?q=-title:(filmcollectief,+stock+footage)+AND+collection:(moviesandfilms)+AND+mediatype:(movies)&fl[]=identifier&fl[]=title&fl[]date&sort[]=__random+desc&sort[]=&sort[]=&rows=${resultsAmount}&page=${getRandomPageNumber()}&output=json`;
}

function removeLoadingPlaceholder() {
  document.getElementById("loading").remove();
}

function getSourceObject(identifier, fileItem) {
  const fileUrl = `https://archive.org/download/${identifier}/${fileItem.name}`;

  if (fileItem.format === "h.264" || fileItem.format === "MPEG4") {
    return {
      src: fileUrl,
      type: "video/mp4",
    };
  } else if (fileItem.format === "Ogg Video") {
    return {
      src: fileUrl,
      type: "video/ogg",
    };
  }
}

function generateSourceList(identifier, fileList) {
  let sourcesArray = [];
  let files = fileList.filter((el) => {
    return (
      el.format === "h.264" ||
      el.format === "MPEG4" ||
      el.format === "Ogg Video"
    );
  });

  files.forEach((el) => {
    let source = getSourceObject(identifier, el);
    sourcesArray.push(source);
  });
  return sourcesArray;
}

function startFilm() {
  fetch(generateSearchURL())
    .then((response) => response.json())
    .then((data) => {
      const films = data.response.docs;
      const randomFilm = films[0];
      runPlayer(randomFilm);
    });
}

function runPlayer(randomFilm) {
  const identifier = randomFilm.identifier;
  const filesUrl = `https://archive.org/metadata/${identifier}/files`;
  fetch(filesUrl)
    .then((response) => response.json())
    .then((data) => {
      const result = data.result;
      const sources = generateSourceList(identifier, result);
      console.log(sources);
      displayPlayer(sources);
    });
}

function displayPlayer(sources) {
  const player = videojs(
    document.querySelector(".video-js"),
    playerOptions,
    function () {
      removeLoadingPlaceholder();
      player.addClass("add-opacity");
      document.querySelector(".btn-reload").classList.add("add-opacity");
    }
  );

  let playlist = generatePlaylist(sources);
  player.playlist(playlist);

  // Trigger Reload on Error
  player.on("error", () => {
    window.location.reload();
  });
}

function generatePlaylist(sources) {
  const playlist = [];
  playlist.push({ sources: sources });
  return playlist;
}

startFilm();
