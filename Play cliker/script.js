function start_game() {
  //   console.log("start_game() works");
  object.classList.add("start");
}

//промах
function miss(event) {
  // console.log("miss() works");
  // event.target.id
  if (event.target.id == "area") {
    score--;
    console.log(score);
  }
}

// попадание по объекту
function hit() {
  //   console.log("hit() works");
  score++;
  console.log(score);
  document.title = `Score ${score}`;

  object.classList.remove("start");
  void object.offsetWidth;      // маги
  object.classList.add("start");

  change_object_background();
  change_object_position();
  }

  //меняет цвет фона объета
  function change_object_background() {
    const colors = ['purple', 'gold', 'orange','blue','red'];
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
