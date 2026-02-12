// Redirection automatique après 4 secondes
setTimeout(function () {
  // Simuler la fin du chargement
  document.querySelector(".loading-text").innerHTML = "bienvenue !";
  document.querySelector(".subtext").innerHTML =
    "Vente de vetement homme et femme";

  // Arrêter l'animation
  document.querySelector(".titre").style.animation = "none";

  // Redirection après 1 seconde supplémentaire
  setTimeout(function () {
    // Dans ton cas réel, tu mettras ta vraie page ici
    window.location.href = "../html/Ema-shop.html";

    // Pour la démo, on affiche juste un message
    // alert('Redirection vers la page principale...');

    // Code réel à utiliser :
    window.location.href = "../html/Ema-shop.html";
  }, 700);
}, 2000);

// Effet de clic pour accélérer
document.querySelector(".container").addEventListener("click", function () {
  document.querySelector(".loadin../thml/acceuil.htmlg-text").innerHTML =
    "ACCÉLÉRATION...";
  document.querySelector(".subtext").innerHTML = "Chargement rapide activé";

  // Accélérer l'animation
  document.querySelector(".titre").style.animationDuration = "0.5s";

  // Rediriger immédiatement
  setTimeout(function () {
    window.location.href = "../html/Ema-shop.html";
    alert("Chargement accéléré ! Redirection...");
  }, 500);
});
