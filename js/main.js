// API FROM OPENWEATHERMAP.ORG 
const api = {
  key: "b688fa5d8b50c295ec2f31db81c32208",
  base: "https://api.openweathermap.org/data/2.5/"
}
//collects location from input field when submit button is clicked
function mouseQuery(e){
  getResults(searchbox.value);
  console.log(searchbox.value);
}

// collects location from input field when enter key is pressed
const searchbox = document.querySelector('.main-search-box');
searchbox.addEventListener('keypress', setQuery);

function setQuery(evt) {
  if (evt.which == 13 ) {
    getResults(searchbox.value);
  }
}

function getResults (query) {
  fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
  .then(weather => {
    return weather.json();
  }) 
  .then(displayResults);
}

function displayResults (weather) {
  console.log(weather);
  let city = document.querySelector('.location .city');
  city.innerText = `${weather.name}, ${weather.sys.country}`;

  let now =new Date();
  let date = document.querySelector('.location .date');
  date.innerText = dateBuilder(now);

  let temp = document.querySelector('.current .temp');
  temp.innerHTML = `${Math.round(weather.main.temp)} <span>°c</span>`;

  let weather_el = document.querySelector('.current .weather');
  weather_el.innerText = weather.weather[0].main;

  let description = document.querySelector('.current .description')
  description.innerText = weather.weather[0].description;

  let hilow = document.querySelector('.hi-low');
  hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}   

function dateBuilder (d) {
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  let day = days[d.getDay()]; 
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}



