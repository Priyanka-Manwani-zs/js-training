let positions = [];
let windowWidth = window.innerWidth;
console.log(windowWidth);

for (let i = 0; i < windowWidth; i++) {
  positions.push([0, i]);
}

let marioDiv = document.querySelector(".mario-div");

function moveMario() {
  positions.forEach(([x, y], index) => {
    setTimeout(() => {
      let pos = positions.shift();
      positions.push(pos);
      marioDiv.style.left = `${pos[1]}px`;

      if (index === positions.length - 1) {
        moveMario();
      }
    }, index * 20);
  });
}
moveMario();
