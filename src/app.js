function displayTemperature(response) {
  let temperatureElements = document.querySelector("#current_temp");
  let cityElement = document.querySelector("#current_city");
  let descriptionTemp = document.querySelector("#current_description");
  let humidityElement = document.querySelector("#humidity");
  let feels_likeElement = document.querySelector("#feels_like");
  let windElement = document.querySelector("#wind_speed");

  temperatureElements.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionTemp.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  feels_likeElement.innerHTML = Math.round(
    response.data.temperature.feels_like
  );
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "4a71f359eca9d0eft630db05oc4deac4";
let metrics = "imperial";
let city = "Houston";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${metrics}`;

axios.get(apiUrl).then(displayTemperature);
