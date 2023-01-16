function formatDate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  if (hours < 10) {
    hours = `${hours}`;
  }
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];

  return `${day} ${hours}:${minutes}`;
}

function displayTemperature(response) {
  let temperatureElements = document.querySelector("#current_temp");
  let cityElement = document.querySelector("#current_city");
  let descriptionTemp = document.querySelector("#current_description");
  let humidityElement = document.querySelector("#humidity");
  let feels_likeElement = document.querySelector("#feels_like");
  let windElement = document.querySelector("#wind_speed");
  let dateElement = document.querySelector("#date_time");
  let iconElement = document.querySelector("#icon");

  temperatureElements.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionTemp.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  feels_likeElement.innerHTML = Math.round(
    response.data.temperature.feels_like
  );
  windElement.innerHTML = Math.round(response.data.wind.speed);
  dateElement.innerHTML = formatDate(response.data.time * 1000);
  iconElement.setAttribute("src", response.data.condition.icon_url);
  iconElement.setAttribute("alt", response.data.condition.description);
}
function search(city) {
  let apiKey = "4a71f359eca9d0eft630db05oc4deac4";
  let metrics = "imperial";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${metrics}`;

  axios.get(apiUrl).then(displayTemperature);
}

function handleSumbit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-input");
  search(cityInputElement.value);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSumbit);
