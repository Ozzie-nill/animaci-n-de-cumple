// Script.js (puedes dejarlo vacío si no necesitas interactividad compleja por ahora)
// Aquí podrías añadir animaciones más complejas con JS si lo deseas.

// Ejemplo: hacer que los mensajes aparezcan gradualmente (opcional)
document.addEventListener('DOMContentLoaded', () => {
    const mainMessage = document.getElementById('main-message');
    const friendName = document.getElementById('friend-name');
    const happyBirthdayText = document.getElementById('happy-birthday-text');
    const cakeTiers = document.querySelectorAll('.cake-tier');
    const candle = document.querySelector('.candle');

    // Ocultar elementos inicialmente
    mainMessage.style.opacity = 0;
    friendName.style.opacity = 0;
    happyBirthdayText.style.opacity = 0;
    cakeTiers.forEach(tier => tier.style.opacity = 0);
    candle.style.opacity = 0;

    let delay = 500; // Retraso inicial en ms

    setTimeout(() => {
        mainMessage.style.transition = 'opacity 1s ease-in';
        mainMessage.style.opacity = 1;
    }, delay);

    delay += 1000;
    setTimeout(() => {
        friendName.style.transition = 'opacity 1s ease-in';
        friendName.style.opacity = 1;
    }, delay);

    delay += 500;
    cakeTiers.forEach((tier, index) => {
        setTimeout(() => {
            tier.style.transition = 'opacity 0.8s ease-out, transform 0.8s ease-out';
            tier.style.opacity = 1;
            tier.style.transform = 'translateY(0)'; // Asegura que se posicione bien
        }, delay + (index * 200)); // Retraso escalonado para los pisos
    });

    delay += (cakeTiers.length * 200) + 500;
    setTimeout(() => {
        candle.style.transition = 'opacity 1s ease-in';
        candle.style.opacity = 1;
    }, delay);

    delay += 1000;
    setTimeout(() => {
        happyBirthdayText.style.transition = 'opacity 1s ease-in';
        happyBirthdayText.style.opacity = 1;
    }, delay);
});