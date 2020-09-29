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

  // sets background image for each weather condition
  if (weather.weather[0].main == "Clouds") {
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370461/clouds.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left bottom";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (weather.weather[0].main == "Rain" ) {
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370461/rain.jpg')";
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
  }  else if (weather.weather[0].main == "Drizzle" ) {
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370461/rain.jpg')";
    document.body.style.backgroundColor = "#000";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (weather.weather[0].main == "Sunny") {
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370468/sunny.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
  } else if (weather.weather[0].main == "Clear"){
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370458/clear.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
  }  else if (weather.weather[0].main == "Mist" || weather.weather[0].main == "Haze"){
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370468/mist.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
  }   else if (weather.weather[0].main == "Wind"){
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370466/windy.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
  }   else if (weather.weather[0].main == "Snow"){
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370467/snow.jpg')";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
  } else {
    document.body.style.background = "URL('https://res.cloudinary.com/geepee/image/upload/v1601370459/cloud2.jpg)";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "left center";
    document.body.style.backgroundRepeat = "no-repeat";
    
  }


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


// weather_el.innerText = "Unavailable, Try another Location";

