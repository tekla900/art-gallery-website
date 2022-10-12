const button = document.querySelector('#loc');
const span = document.querySelector('#loc-span');
const prevBtn = document.querySelector('.bck-btn');
const map = L.map('map').setView([-33.89, 151.18], 17);

button.addEventListener('mouseover', () => {
    span.style.backgroundColor = "#151515";
});

button.addEventListener('mouseout', () => {
    span.style.backgroundColor = "#D5966C";
});

button.addEventListener('click', () => {
    location.href = "./location.html";
});

prevBtn.addEventListener('click', () => {
    location.href = "./index.html";
});


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var marker = L.marker([-33.89, 151.18]).addTo(map);
