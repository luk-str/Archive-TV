function generateSearchURL() {
  const randomPageNumber = Math.floor(Math.random() * 1000);
  return `https://archive.org/advancedsearch.php?q=-title:(filmcollectief,+stock+footage)+AND+collection:(moviesandfilms)+AND+mediatype:(movies)&fl[]=identifier&fl[]=title&fl[]date&sort[]=__random+desc&sort[]=&sort[]=&rows=10&page=${randomPageNumber}&output=json`;
}

function getRandomFilm(films) {
  const randomId = Math.floor(Math.random() * films.length);
  return films[randomId];
}

const playerOptions = {
  autoplay: false,
  controls: [
    "play-large",
    "play",
    "progress",
    "current-time",
    "volume",
    "airplay",
    "fullscreen",
  ],
};

function runPlayer(randomFilm) {
  const identifier = randomFilm.identifier;
  const filesUrl = `https://archive.org/metadata/${identifier}/files`;
  fetch(filesUrl)
    .then((response) => response.json())
    .then((data) => {
      const result = data.result;
      let fileh264 = "";
      let fileMPEG4 = "";
      let fileQuickTime = "";
      let fileOgg = "";

      for (let i = 0; i < result.length; i++) {
        let fileName = result[i].name;
        switch (result[i].format) {
          case "h.264":
            fileh264 = fileName;
            break;
          case "MPEG4":
            fileMPEG4 = fileName;
            break;
          case "QuickTime":
            fileQuickTime = fileName;
            break;
          case "Ogg Video":
            fileOgg = fileName;
        }
      }

      // VIDEO JS
      const videoSource = `https://archive.org/download/${identifier}/${
        fileh264 || fileMPEG4 || fileQuickTime || fileOgg
      }`;
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
      const player = videojs(
        document.querySelector(".video-js"),
        playerOptions,
        function () {
          this.addClass("add-opacity");
          document
            .getElementsByClassName("reload-btn")[0]
            .classList.add("add-opacity");
        }
      );
      player.src(videoSource);

      // Trigger Reload on Error
      player.on("error", () => {
        window.location.reload();
      });
    });
}

function startFilm() {
  fetch(generateSearchURL())
    .then((response) => response.json())
    .then((data) => {
      const films = data.response.docs;
      const randomFilm = getRandomFilm(films);
      const filmDate = new Date(randomFilm.date).getFullYear() || "undefined";
      const title = randomFilm.title;

      document.getElementById(
        "title"
      ).innerHTML = `title: <strong>${title}</strong>`;
      document.getElementById(
        "year"
      ).innerHTML = `year: <strong>${filmDate}</strong>`;

      document.getElementById("loading").remove();

      runPlayer(randomFilm);
    });
}

startFilm();
