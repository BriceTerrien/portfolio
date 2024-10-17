const toggleBtn = document.querySelector('.theme-toggle-btn');
const body = document.querySelector('body');

// Charger le thème lors du chargement de la page
window.onload = function(){
    const theme = localStorage.getItem('theme') || 'dark';

    if(theme === 'light') {
        toggleBtn.classList.add('light');
        body.classList.add('light');
    }
    // Initialiser les particules avec le thème actuel
    initParticles();
}

// Changer de thème lorsque le bouton est cliqué
toggleBtn.addEventListener('click', () => {
    const isLight = body.classList.contains('light');

    toggleBtn.classList.toggle('light');
    body.classList.toggle('light');

    const newTheme = isLight ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);

    // Réinitialiser les particules après changement de thème
    initParticles();
});