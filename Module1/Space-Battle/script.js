const alienArray = [];
var alienCount = 0;
//Defines actor class.
class Actor {
  constructor(name, hull, firepower, accuracy) {
    this.name = name;
    this.hull = hull;
    this.firepower = firepower;
    this.accuracy = accuracy;
  }
// Defines attack option.
  attack() {
    if (alienCount > 4) {
      $('#game-text').append(
        `<div class="action">You won! ${
          spaceShip.name
        } has defeated the aliens!<br></div><div class="action">${
          alienArray[alienCount].name
        } ${
          alienCount + 1
        } is destroyed!<br> Type "restart" to play again!</div>`
      );
    } else {
      if (Math.random() < spaceShip.accuracy) {
        alienArray[alienCount].hull =
          alienArray[alienCount].hull - spaceShip.firepower;
        if (alienArray[alienCount].hull <= 0) {
          $('#game-text').append(
            `<div class="action">${alienArray[alienCount].name} ${
              alienCount + 1
            } is destroyed!<br></div>`
          );
          alienCount++;
        } else {
          alienAttack();
        }
      } else {
        $('#game-text').append(
          `<div class="action">${spaceShip.name} has missed...<br></div>`
        );
        alienAttack();
      }
    }
  }
  retreat() {
    $('#game-text').append(
      `<div class="action">${this.name} has retreated! Game over!</div>`
    );
    var alienCount = 0;
  }
}
//Defines alien attack function
function alienAttack() {
  $('#game-text').append(
    `<div class="action">${alienArray[alienCount].name} ${
      alienCount + 1
    }'s health is ${alienArray[alienCount].hull}<br></div>`
  );

  setTimeout(function () {
    $('#game-text').append(
      `<div class="action">${alienArray[alienCount].name} ${
        alienCount + 1
      } is launching an attack...<br></div>`
    );
    if (Math.random() < alienArray[alienCount].accuracy) {
      spaceShip.hull = spaceShip.hull - alienArray[alienCount].firepower;
      setTimeout(function () {
        $('#game-text').append(
          `<div class="action">${spaceShip.name} has been hit! Health is now at ${spaceShip.hull}<br></div>`
        );
      }, 3000);
    } else {
      $('#game-text').append(
        `<div class="action">${alienArray[alienCount].name} ${
          alienCount + 1
        } has missed...<br></div>`
      );
    }
  }, 2000);
  if (spaceShip.hull <= 0) {
    $('#game-text').append(`${spaceShip.name} is dead! Game Over`);
  }
}

for (let i = 0; i < 6; i++) {
  let alien = new Actor(
    'Alien',
    getRand(3, 7),
    getRand(2, 4),
    Number(getRandomDec(0.6, 0.8).toFixed(1)),
    6
  );
  alienArray.push(alien);
}
// Defines spaceship object.
let spaceShip = new Actor('USS Nostromo', 20, 5, 0.7, 6);

//Generates random number within range.
function getRand(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.abs(Math.floor(Math.random() * (max - min) + min));
}
//Generates random decimal.
function getRandomDec(min, max) {
  return Math.random() * (max - min) + min;
}

var commands = [
  'Type in the word: "attack" - to damage enemy',
  'Type in the word: "retreat" - to escape enemy',
  'Type in the word: "restart" - to restart game',
];

function restart() {
  location.reload();
}

function playerInput(input) {
  var command = input.split(' ')[0];
  switch (command) {
    case 'help':
      showHelp();
      break;
    case 'attack':
      spaceShip.attack();
      break;
    case 'retreat':
      spaceShip.retreat();
      break;
    case 'restart':
      restart();
      break;
    default:
      $('#game-text').append('<p>Invalid command!</p>');
  }
}

$(document).ready(function () {
  $(document).keypress(function (key) {
    if (key.which === 13 && $('#user-input').is(':focus')) {
      var value = $('#user-input').val().toLowerCase();
      $('#user-input').val('');
      playerInput(value);
    }
  });
});
