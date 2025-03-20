const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API Key

function getWeather() {
    const city = document.getElementById("cityInput").value;
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            if (data.cod === "404") {
                document.getElementById("weatherResult").innerHTML = "<p>City not found.</p>";
                return;
            }

            const weatherHTML = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;

            document.getElementById("weatherResult").innerHTML = weatherHTML;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
        });
}
