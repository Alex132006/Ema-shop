setTimeout(function () {
  document.querySelector(".loading-text").innerHTML = "bienvenue !";
  document.querySelector(".subtext").innerHTML =
    "Vente de vetement homme et femme";

  // Arrêter l'animation
  document.querySelector(".titre").style.animation = "none";

  setTimeout(function () {
    window.location.href = "./front-end/html/Ema-shop.html";

    window.location.href = "./front-end/html/Ema-shop.html";
  }, 700);
}, 2000);

document.querySelector(".container").addEventListener("click", function () {
  document.querySelector(".loadin../thml/acceuil.htmlg-text").innerHTML =
    "ACCÉLÉRATION...";
  document.querySelector(".subtext").innerHTML = "Chargement rapide activé";

  document.querySelector(".titre").style.animationDuration = "0.5s";

  setTimeout(function () {
    window.location.href = "./front-end/html/Ema-shop.html";
    alert("Chargement accéléré ! Redirection...");
  }, 500);
});
