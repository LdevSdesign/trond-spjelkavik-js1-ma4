const gamesUrl = "https://api.rawg.io/api/games";

async function getGames() {
  try {
    const response = await fetch(gamesUrl);
    const games = await response.json();

    const gamesResults = games.results;

    createGames(gamesResults);
  } catch (error) {
    console.log(error);
  }
}

getGames();

function createGames(gamesResults) {
  console.log(gamesResults);
  const result = document.querySelector(".results");

  let html = "";

  for (let i = 0; i < gamesResults.length; i++) {
    html += `
        <div class="game">
    <h2>${gamesResults[i].name}</h2>
    <img src="${gamesResults[i].background_image}" alt="${gamesResults[i].name}" />
</div>
        `;
  }
  result.innerHTML = html;
}
