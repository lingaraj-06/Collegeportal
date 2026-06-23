async function getWeather() {

    const url =
        "https://api.open-meteo.com/v1/forecast?latitude=13.0827&longitude=80.2707&current=temperature_2m,relative_humidity_2m,wind_speed_10m";

    try {

        const response = await fetch(url);

        const data = await response.json();

        document.getElementById("weather").innerHTML = `
            <h3>Chennai</h3>
            <p>🌡 Temperature: ${data.current.temperature_2m} °C</p>
            <p>💧 Humidity: ${data.current.relative_humidity_2m}%</p>
            <p>💨 Wind Speed: ${data.current.wind_speed_10m} km/h</p>
        `;

    } catch (error) {

        document.getElementById("weather").innerHTML =
            "Failed to load weather data";

        console.log(error);
    }
}