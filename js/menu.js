const menuToggle = document.querySelector('.menu-toggle');
const menuItems = document.querySelector('.menu-items');

menuToggle.addEventListener('click', function() {
  menuItems.classList.toggle('show');
});

var commandsColumnVisible1 = true;
var commandsColumnVisible2 = true;
var commandsColumnVisible3 = true;

function toggleCommandsColumn1() {
  var commandsColumn = document.getElementById("commands-column1");
  var toggleButton = document.querySelector(".toggle1");

  if (commandsColumnVisible1) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible1 = !commandsColumnVisible1;
}

function toggleCommandsColumn2() {
  var commandsColumn = document.getElementById("commands-column2");
  var toggleButton = document.querySelector(".toggle2");

  if (commandsColumnVisible2) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible2 = !commandsColumnVisible2;
}

function toggleCommandsColumn3() {
  var commandsColumn = document.getElementById("commands-column3");
  var toggleButton = document.querySelector(".toggle3");

  if (commandsColumnVisible3) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible3 = !commandsColumnVisible3;
}