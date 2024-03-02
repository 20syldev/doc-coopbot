var commandsColumnVisible1, commandsColumnVisible2, commandsColumnVisible3, commandsColumnVisible4 = false;

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

  localStorage.setItem('selectedMenu1', JSON.stringify(commandsColumnVisible1));
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

  localStorage.setItem('selectedMenu2', JSON.stringify(commandsColumnVisible2));
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

  localStorage.setItem('selectedMenu3', JSON.stringify(commandsColumnVisible3));
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

  localStorage.setItem('selectedMenu4', JSON.stringify(commandsColumnVisible4));
}

function switchTheme(theme) {
  var leftMenu = document.getElementById('left-menu');
  var bodycolor = document.getElementById('body-color');
  var footer = document.getElementById('footer');
  var bar1 = document.getElementById('bar1');
  var bar2 = document.getElementById('bar2');

  leftMenu.classList.remove('theme1', 'theme2', 'theme3');
  bodycolor.classList.remove('theme1', 'theme2', 'theme3');
  footer.classList.remove('theme1', 'theme2', 'theme3');
  bar1.classList.remove('theme1', 'theme2', 'theme3');
  bar2.classList.remove('theme1', 'theme2', 'theme3');
  
  leftMenu.classList.add(theme);
  bodycolor.classList.add(theme);
  footer.classList.add(theme);
  bar1.classList.add(theme);
  bar2.classList.add(theme);

  localStorage.setItem('selectedTheme', theme);
}

function copyContent(button) {
  try {
      const copyText = button.getAttribute("data-link");
      navigator.clipboard.writeText(copyText);

      button.classList.add("copied");

      const copiedTextElement = document.createElement("div");
      copiedTextElement.classList.add("copiedText");
      copiedTextElement.textContent = "Lien copié dans le presse-papier !";

      document.body.appendChild(copiedTextElement);

      setTimeout(function () {
          copiedTextElement.classList.add("fadeIn");
      }, 10);

      setTimeout(function () {
          button.classList.remove("copied");
          
          copiedTextElement.classList.remove("fadeIn");
          copiedTextElement.classList.add("fadeOut");

          setTimeout(function () {
              document.body.removeChild(copiedTextElement);
          }, 1000);
      }, 2000);
  } catch (err) {
      console.error("Échec de la copie : ", err);
  }
}

function changeMessage() {
  var messages = [
    "🎁 <b>30%</b> de réduction sur le pack Premium jusqu'à fin Janvier. <a id='promo' href='https://shop.beacons.ai/coopbot/d66b4ff7-26ab-4af8-8967-8ca83a41a349'>Abonnez-vous maintenant</a>.",
    "🎁 Pack Plus à <b>3,99 €</b> <span class='promoCroix'>4,99 €</span> pendant encore <span id='compteur'></span>. <a id='promo' href='https://shop.beacons.ai/coopbot/b82690a7-3782-4969-8c2e-2b48403523dc'>Abonnez-vous maintenant</a>.",
    "🎁 Pack Standard à prix réduit, <b>-10%</b> jusqu'au 31 Janvier. <a id='promo' href='https://shop.beacons.ai/coopbot/1548ee35-dabb-4c51-a5fa-e58d7777d769'>Abonnez-vous maintenant</a>."
  ];

  var randomIndex = Math.floor(Math.random() * messages.length);
  var selectedMessage = messages[randomIndex];

  document.getElementById('promoText').innerHTML = selectedMessage;
}

window.onscroll = function () { updateProgressBar() };

function updateProgressBar() {
  const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 90;
  document.getElementById("progress-bar").style.width = scrolled + "%";
}

document.addEventListener('DOMContentLoaded', function() {
    var selectedMenu1 = localStorage.getItem('selectedMenu1');
    if (selectedMenu1 !== null) {
        selectedMenu1 = JSON.parse(selectedMenu1);
        if (selectedMenu1) {
            toggleCommandsColumn1();
        }
    }

    var selectedMenu2 = localStorage.getItem('selectedMenu2');
    if (selectedMenu2 !== null) {
        selectedMenu2 = JSON.parse(selectedMenu2);
        if (selectedMenu2) {
            toggleCommandsColumn2();
        }
    }

    var selectedMenu3 = localStorage.getItem('selectedMenu3');
    if (selectedMenu3 !== null) {
        selectedMenu3 = JSON.parse(selectedMenu3);
        if (selectedMenu3) {
            toggleCommandsColumn3();
        }
    }

    var selectedMenu4 = localStorage.getItem('selectedMenu4');
    if (selectedMenu4 !== null) {
        selectedMenu4 = JSON.parse(selectedMenu4);
        if (selectedMenu4) {
            toggleCommandsColumn4();
        }
    }

    var selectedTheme = localStorage.getItem('selectedTheme');
    if (selectedTheme) {
        switchTheme(selectedTheme);
    }

    changeMessage();

    var date = new Date();
    var limitePromo = new Date(2024, 0, 31, 23, 59, 59);
    var barPromo = document.getElementById('barPromo');
    var footer = document.getElementById('footer');
    var menu = document.getElementById('left-menu');

    if (date > limitePromo) {
        barPromo.style.display = 'none';
        localStorage.setItem('promoHidden', 'none');
        footer.style.top = menu.style.top = '0px';
    } else {
        promoHide();
    }

    setInterval(function() {
        var date = new Date();
        var tempsRestant = limitePromo - date;
        var jours = Math.floor(tempsRestant / (1000 * 60 * 60 * 24));
        var heures = Math.floor((tempsRestant % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((tempsRestant % (1000 * 60 * 60)) / (1000 * 60));
        var secondes = Math.floor((tempsRestant % (1000 * 60)) / 1000);
        document.getElementById("compteur").innerHTML = jours + "j " + heures + "h " + minutes + "m " + secondes + "s";
    }, 1000);

    if (mainPage()) {
        var promoState = localStorage.getItem('promoHidden');
        barPromo.style.display = promoState || 'block';
        var valeur = (barPromo.style.display === 'none') ? 0 : 50;
        footer.style.top = menu.style.top = valeur + 'px';
    }

});

function promoHide() {
  if (mainPage()) {
    var barPromo = document.getElementById('barPromo');
    var footer = document.getElementById('footer');
    var menu = document.getElementById('left-menu');
    barPromo.style.display = (barPromo.style.display === 'none' || barPromo.style.display === '') ? 'block' : 'none';
    localStorage.setItem('promoHidden', barPromo.style.display);
    var valeur = (barPromo.style.display === 'none') ? 0 : 50;
    footer.style.top = menu.style.top = valeur + 'px';
  }
}

function mainPage() {
  var url = window.location.href;
  return url.includes('/doc-coopbot/') || url.includes('/doc-coopbot/index') || url.includes('/doc-coopbot/home');
}