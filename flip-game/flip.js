let tiles = document.getElementsByClassName("tiles");
let selectedTiles = [];
console.log("length", selectedTiles.length);
var count = 0;
let score = document.getElementById("scorecount");

for (let tile of tiles) {
  tile.addEventListener("click", function () {
    if (selectedTiles.includes(tile)) return;
    selectedTiles.push(tile);

    tile.classList.toggle("flipTile");
    console.log("selected tiles", selectedTiles);

    // let img = selectedTiles[0].querySelector(".back img");
    // console.log(img);

    if (selectedTiles.length == 2) {
      let img1 = selectedTiles[0].querySelector(".back img");
      let img2 = selectedTiles[1].querySelector(".back img");
      if (img1.src == img2.src) {
        setTimeout(() => {
          selectedTiles[0].classList.toggle("hideTile");
          selectedTiles[1].classList.toggle("hideTile");
          console.log("selected tile class ", selectedTiles[0].classList);
          selectedTiles.splice(0, selectedTiles.length);
          count++;
          score.textContent = count;
        }, 600);
      } else {
        setTimeout(() => {
          selectedTiles[0].classList.toggle("flipTile");
          selectedTiles[1].classList.toggle("flipTile");
          selectedTiles.splice(0, selectedTiles.length);
        }, 500);
      }
    }
  });
}
