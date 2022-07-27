const gameList = document.getElementById("prd-container");
const softwareList = document.getElementById("sft-container");

let game = [];
let software = [];

const loadGame = async () => {
  try {
    const res = await fetch("../JSON/Games.json");
    game = await res.json();

    displayGame(game);
  } catch (err) {
    console.error(err);
  }
};

const loadSoftware = async () => {
  try {
    const res = await fetch("../JSON/Software.json");
    software = await res.json();

    displaySoftware(software);
  } catch (err) {
    console.error(err);
  }
};

const displayGame = (gameInfo) => {
  const htmlString = gameInfo
    .map((gameInfo) => {
      return `
    <div class="prd-card" id="${gameInfo.gameID}">
        <a href="/Pages/Games/${gameInfo.gameURL}.html">
      <div class="prd-card-poster ${gameInfo.gameGOTY}">
        <img src="/Assets/Posters/Games/${gameInfo.gameName}.jpg" alt="${gameInfo.gameName}" />
      </div>
      <div class="prd-card-title">${gameInfo.gameName}</div>
      <div class="prd-card-details">
        <div class="prd-card-date">${gameInfo.gameYear}</div>
        <div class="prd-card-platforms">
          <img src="/Assets/Icons/${gameInfo.gamePlatform}.svg" alt="${gameInfo.gamePlatform}" />
        </div>
      </div>
    </a>
  </div>
        `;
    })
    .join("");
  gameList.innerHTML = htmlString;
};

const displaySoftware = (softwareInfo) => {
  const htmlString = softwareInfo
    .map((softwareInfo) => {
      return `
    <div class="prd-card" id="${softwareInfo.softwareID}">
        <a href="/Pages/Utilities/${softwareInfo.softwareName}.html">
      <div class="prd-card-poster">
        <img src="/Assets/Posters/Games/${softwareInfo.softwareName}.jpg" alt="${softwareInfo.softwareName}" />
      </div>
      <div class="prd-card-title">${softwareInfo.softwareName}</div>
      <div class="prd-card-details">
        <div class="prd-card-date">${softwareInfo.softwareYear}</div>
        <div class="prd-card-platforms">
          <img src="/Assets/Icons/${softwareInfo.softwarePlatform}.svg" alt="${softwareInfo.softwarePlatform}" />
        </div>
      </div>
    </a>
  </div>
        `;
    })
    .join("");
  softwareList.innerHTML = htmlString;
};

loadGame();
loadSoftware();
