let lastScrollTop = 0;
const navbar = document.querySelector('header nav');
const logo = document.querySelector('header .logo');

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        
        navbar.style.top = '0'; 
    } else {

        let logoRect = logo.getBoundingClientRect();
        if (scrollTop < logoRect.bottom) {
            navbar.style.top = '100px'; 
        }
    }

    lastScrollTop = scrollTop;
});


function duplicateAndMoveToFavorite(cardId) {
    var card = document.getElementById(cardId);
    var favoritesSection = document.getElementById('favoritos');
    

    var clonedCard = card.cloneNode(true);
    

    var likeBtn = clonedCard.querySelector('.like-btn');
    likeBtn.innerText = 'Ya no me gusta';
    likeBtn.onclick = function() {
        removeFromFavorites(clonedCard.id);
    };
    

    favoritesSection.appendChild(clonedCard);
}

function removeFromFavorites(cardId) {
    var card = document.getElementById(cardId);
    

    card.parentNode.removeChild(card);
}

document.addEventListener('DOMContentLoaded', function() {
    var formulario = document.querySelector('.formulario-container');
    var overlay = document.getElementById('overlay');
    var botonIngresar = document.getElementById('ingresar-como-invitado-btn');

    botonIngresar.addEventListener('click', function() {
        formulario.style.display = 'none'; 
        overlay.style.display = 'none'; 
    });
});

if ("serviceWorker" in navigator) {
    window.addEventListener("load", function() {
      navigator.serviceWorker
        .register("/serviceWorker.js")
        .then(res => console.log("service worker registered"))
        .catch(err => console.log("service worker not registered", err))
    })
  }