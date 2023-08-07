function start_game() {
  //   console.log("start_game() works");
  object.classList.add("start");
}

function finish_game() {
  // console.log('test finish_game functions');
  // play sound
  object.classList.remove("start");
  alert("You lose");
}

//промах
function miss(event) {
  // console.log("miss() works");
  // event.target.id
  if (event.target.id == "area") {
    score--;
    console.log(score);

    miss_sound.currentTime = 0;
    miss_sound.play();

    if (score <= 0) {
      finish_game();
    }
  }
}

// попадание по объекту
function hit() {
  //   console.log("hit() works");
  score++;
  console.log(score);
  document.title = `Score ${score}`;

  object.classList.remove("start");
  void object.offsetWidth; // магия
  object.classList.add("start");

  change_object_background();
  change_object_position();
  change_object_size();
  change_object_spid();

  hit_sound.currentTime = 0;
  hit_sound.play();
}

// // изменение скорости при клике на объект
function change_object_spid() {
  const spid = 1 + Math.random() * 5;
  object.stzle.animationDuration = `${spid}s`;
}

// изменение размера при клике на объект
function change_object_size() {
  const size = 40 + Math.random() * 80;
  object.style.width = `${size}px`;
}

//меняет цвет фона объета
function change_object_background() {
  const colors = ["purple", "gold", "orange", "blue", "red"];
  const index = Math.floor(Math.random() * colors.length);
  // concole.log(colors[index]);
  object.style.background = colors[index];
}
//  меняем положение объекта по Х
function change_object_position() {
  const random_offset = Math.random() * 340;
  object.style.left = `${random_offset}px`;
}

let score = 0;
let object = document.querySelector("#object");

const hit_sound = new Audio("sounds/hit.wav");
const miss_sound = new Audio("sounds/miss.wav");
