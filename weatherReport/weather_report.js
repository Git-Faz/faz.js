function showWeatherDetails(event) {
    event.preventDefault();
    const city = document.getElementById("city").value;
    const apiKey = "1d5339a5555cb682c5e7fbac5d20ce08";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById("weatherInfo");
            weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                   <p>Temperature: ${data.main.temp} &#8451;</p>
                                   <p>Weather: ${data.weather[0].description}</p>`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            weatherInfo.innerHTML = `<p>Failed to fetch weather. Please try again.</p>`; // Fixed typo in "again"
        });
}

document.getElementById('weatherForm').addEventListener('submit', showWeatherDetails);