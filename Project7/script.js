// Function to fetch weather information for the provided city
function getWeather() {
  // OpenWeatherMap API key
  const apiKey = '7d939c06ec5105a806c2ab1ca5838e9d';
  
  // Get the city name from the input field
  const city = document.getElementById('city').value;

  // Check if the city name is empty
  if (!city) {
      alert('Please enter a city name.');
      return;
  }

  // API URL for fetching weather data using the provided city and API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  // Fetch weather data from the OpenWeatherMap API
  fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
          // Get the element where weather information will be displayed
          const weatherInfo = document.getElementById('weather-info');

          // Check if the city is not found
          if (data.cod === '404') {
              weatherInfo.textContent = 'City not found. Please try again.';
          } else {
              // Extract temperature, description, and icon code from the API response
              const temperature = data.main.temp;
              const description = data.weather[0].description;
              const iconCode = data.weather[0].icon;

              // Construct the URL for the weather icon
              const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;

              // Display weather information on the webpage
              weatherInfo.innerHTML = `
                  <p>Temperature: ${temperature} &#8451;</p>
                  <p>Description: ${description}</p>
                  <img src="${iconUrl}" alt="Weather Icon">
              `;
          }
      })
      .catch(error => {
          // Log an error message if there is an issue fetching weather data
          console.error('Error fetching weather data:', error);
      });
}
