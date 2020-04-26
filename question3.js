const gameUrl = "https://api.rawg.io/api/games/4200";

async function getGame() {
  try {
    const response = await fetch(gameUrl);
    const game = await response.json();

    createGameDetails(game);
  } catch (error) {
    console.log(error);
  }
}

getGame();

function createGameDetails(game) {
  const h1 = document.querySelector("h1").innerHTML;
  const image = document.querySelector(".image");
  const description = document.querySelector(".description").innerHTML;
  console.log(game);

  const newHeadline = h1.replace("Name of game", `${game.name}`);

  image.style.backgroundImage = `url(${game.background_image})`;

  const newDescription = description.replace(
    "Description goes here",
    `${game.description}`
  );

  document.querySelector(".description").innerHTML = newDescription;
  document.querySelector("h1").innerHTML = newHeadline;
}
