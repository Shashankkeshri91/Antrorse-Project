function getWeather() {
    const apiKey = '7d939c06ec5105a806c2ab1ca5838e9d';
    const city = document.getElementById('city').value;
  
    if (!city) {
      alert('Please enter a city name.');
      return;
    }
  
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const weatherInfo = document.getElementById('weather-info');
        if (data.cod === '404') {
          weatherInfo.textContent = 'City not found. Please try again.';
        } else {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          const iconCode = data.weather[0].icon;
  
          const iconUrl = `https://openweathermap.org/img/wn/${iconCode}.png`;
  
          weatherInfo.innerHTML = `
            <p>Temperature: ${temperature} &#8451;</p>
            <p>Description: ${description}</p>
            <img src="${iconUrl}" alt="Weather Icon">
          `;
        }
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }
  