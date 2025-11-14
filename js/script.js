const map = L.map('map').setView([49.9506, 2.9569], 13); // Coordonnées de Péronne


L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Point de départ du club
L.marker([49.9590, 2.9525]).addTo(map)
    .bindPopup('<strong>Adulte Route</strong><br>Départ des sorties')
    .openPopup();
L.marker([49.9506, 2.9252]).addTo(map)
    .bindPopup('<strong> jeunes VTT</strong><br>Départ des sorties')
    .openPopup();



const buttons = document.querySelectorAll('[data-filtre]');
const button2 = document.querySelectorAll('[data-filtre2]');
const items = document.querySelectorAll('.galerie-item');
const item2 = document.querySelectorAll('.trombi-item');

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filtre');

        items.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
button2.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filtre2');

        item2.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    });
});
