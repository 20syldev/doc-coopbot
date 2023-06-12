var commandsColumnVisible1, commandsColumnVisible2, commandsColumnVisible3, commandsColumnVisible4 = true;

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

function toggleCommandsColumn4() {
  var commandsColumn = document.getElementById("commands-column4");
  var toggleButton = document.querySelector(".toggle4");

  if (commandsColumnVisible4) {
    commandsColumn.style.display = "none";
    toggleButton.classList.remove("rotate");
    toggleButton.classList.add("reverse");
  } else {
    commandsColumn.style.display = "block";
    toggleButton.classList.remove("reverse");
    toggleButton.classList.add("rotate");
  }

  commandsColumnVisible4 = !commandsColumnVisible4;
}


function switchTheme(theme) {
  var leftMenu = document.getElementById('left-menu');
  var bodycolor = document.getElementById('body-color');
  var footer = document.getElementById('footer');
  var bar = document.getElementById('bar');

  leftMenu.classList.remove('theme1', 'theme2', 'theme3');
  bodycolor.classList.remove('theme1', 'theme2', 'theme3');
  footer.classList.remove('theme1', 'theme2', 'theme3');
  bar.classList.remove('theme1', 'theme2', 'theme3');
  

  leftMenu.classList.add(theme);
  bodycolor.classList.add(theme);
  footer.classList.add(theme);
  bar.classList.add(theme);
}