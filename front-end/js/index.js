// Variables pour stocker les timers
let redirectTimer;
let accelerationTimer;

// Fonction pour obtenir l'élément de manière sécurisée
function safeSetText(selector, text) {
  const element = document.querySelector(selector);
  if (element) {
    element.innerHTML = text;
  }
}

// Fonction de redirection
function redirectToApp() {
  window.location.href = "front-end/html/Ema-shop.html";
}

// Redirection automatique après 4 secondes
redirectTimer = setTimeout(function () {
  // Simuler la fin du chargement
  safeSetText(".loading-text", "bienvenue !");
  safeSetText(".subtext", "Redirection vers l'application...");

  // Arrêter l'animation
  const titreElement = document.querySelector(".titre");
  if (titreElement) {
    titreElement.style.animation = "none";
  }

  // Redirection après 1 seconde supplémentaire
  accelerationTimer = setTimeout(function () {
    redirectToApp();
  }, 1000);
}, 4000);

// Effet de clic pour accélérer
document.querySelector(".container").addEventListener("click", function () {
  // Annuler les timers existants pour éviter les conflits
  clearTimeout(redirectTimer);
  clearTimeout(accelerationTimer);

  // Mise à jour du texte
  safeSetText(".loading-text", "ACCÉLÉRATION...");
  safeSetText(".subtext", "Chargement rapide activé");

  // Accélérer l'animation
  const titreElement = document.querySelector(".titre");
  if (titreElement) {
    titreElement.style.animationDuration = "0.5s";
  }

  // Rediriger immédiatement après un court délai pour permettre l'affichage
  setTimeout(function () {
    redirectToApp();
  }, 500);
});
