(function () {
  var aDeviner = Math.round(Math.random() * 10);
  var essai = window.prompt("Entrer un chiffre");
  essai = parseInt(essai, 10);
  var essais = 3;
  while (essai != aDeviner && essais > 0) {
    essais--;
    if (essai < aDeviner) {
      alert("chiffre trop petit");
    } else {
      alert("chiffre trop grand");
    }
    if (essais > 0) {
      essai = window.prompt("Entrer un chiffre");
    }
  }
  if (essai == aDeviner) {
    alert("Bravo !!");
  } else {
    alert("Echec");
  }
})();
