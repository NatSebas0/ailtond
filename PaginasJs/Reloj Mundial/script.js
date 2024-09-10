document.addEventListener('DOMContentLoaded', () => {
    const cities = {
        'Lima': 'America/Lima',
        'Nueva York': 'America/New_York',
        'Londres': 'Europe/London',
        'Tokio': 'Asia/Tokyo',
        'Sídney': 'Australia/Sydney',
        'Madrid': 'Europe/Madrid',
        'Las Palmas': 'Atlantic/Canary'
    };

    function updateClocks() {
        const now = new Date();
        const clocksContainer = document.getElementById('clocks');
        clocksContainer.innerHTML = ''; // Limpia el contenido anterior

        for (const [city, timezone] of Object.entries(cities)) {
            const time = new Intl.DateTimeFormat('es-ES', {
                timeZone: timezone,
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: false
            }).format(now);

            const cityElement = document.createElement('div');
            cityElement.classList.add('col');
            cityElement.innerHTML = `
                <div class="clock">
                    <div class="city-name">${city}</div>
                    <div>${time}</div>
                </div>
            `;
            clocksContainer.appendChild(cityElement);
        }
    }

    // Actualiza la hora cada segundo
    setInterval(updateClocks, 1000);

    // Actualiza la hora inmediatamente al cargar la página
    updateClocks();
});