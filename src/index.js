import "./style.css";

const getDay = (date) => date.getDay();

const week = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const months = [
  "extra",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let weatherData;
let unit;
let currentDay = 0;

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

async function getWeather(place) {
  const response = await fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=50db6fb9d50c4cc5933182609241604&q=${place}&days=3&aqi=no&alerts=no`,
    { mode: "cors" },
  );
  const responseResult = await response.json();
  const weatherData = await responseResult;
  return weatherData;
}

if (localStorage.getItem("lastLocation") === null) {
  weatherData = await getWeather("Istanbul");
} else {
  weatherData = await getWeather(localStorage.getItem("lastLocation"));
}

const selectc = document.getElementById("selectc");
const selectf = document.getElementById("selectf");

selectc.addEventListener("click", () => {
  localStorage.setItem("system", "C");
  selectc.classList = "selected";
  selectf.classList.remove("selected");
  window.location = window.location;
});

selectf.addEventListener("click", () => {
  localStorage.setItem("system", "F");
  selectf.classList = "selected";
  selectc.classList.remove("selected");
  window.location = window.location;
});

if (localStorage.getItem("system") === null) {
  unit = "C";
  selectc.classList = "selected";
  selectf.classList.remove("selected");
} else if (localStorage.getItem("system") === "C") {
  unit = "C";
  selectc.classList = "selected";
  selectf.classList.remove("selected");
} else if (localStorage.getItem("system") === "F") {
  unit = "F";
  selectf.classList = "selected";
  selectc.classList.remove("selected");
}

const dayImages = importAll(
  require.context("./img/weathers/day", false, /\.(png|jpe?g|svg)$/),
);
const nightImages = importAll(
  require.context("./img/weathers/night", false, /\.(png|jpe?g|svg)$/),
);

changeDom(weatherData, 0, unit);

function setBackground(imgSrc, element, path) {
  element.style.backgroundImage = `url(${imgSrc[`${path}.svg`]})`;
  element.style.backgroundSize = "cover";
}

function createHours(
  imgSrc,
  system = "C",
  path = weatherData.forecast.forecastday[0].hour,
) {
  const mainhourly = document.getElementById("mainhourly");
  mainhourly.innerHTML = "";
  for (let i = 0; i < 24; i++) {
    const hour = document.createElement("div");
    hour.classList = "hour";

    const hourtext = document.createElement("div");
    hourtext.classList = "hourtext";
    hourtext.innerHTML = path[i].time.split(" ")[1];

    const randomicon = document.createElement("div");
    randomicon.classList = "randomicon";
    setBackground(imgSrc, randomicon, path[i].condition.code);

    const hourtemp = document.createElement("hourtemp");
    hourtemp.classList = "hourtemp";
    hourtemp.innerHTML =
      system === "C" ? `${path[i].temp_c} °C` : `${path[i].temp_f} °F`;

    hour.appendChild(hourtext);
    hour.appendChild(randomicon);
    hour.appendChild(hourtemp);

    mainhourly.appendChild(hour);
  }
}
function changeDom(data, dayIndex = 0, system = "C") {
  const todayIcon = document.getElementById("today");
  const datetext = document.getElementById("date");

  const country = document.getElementById("country");
  const province = document.getElementById("province");
  const nowDegree = document.getElementById("degree");

  let imgSrc;
  if (weatherData.current.is_day) {
    imgSrc = dayImages;
  } else {
    imgSrc = nightImages;
  }

  createHours(imgSrc, system, data.forecast.forecastday[dayIndex].hour);

  setBackground(
    imgSrc,
    todayIcon,
    data.forecast.forecastday[dayIndex].day.condition.code,
  );

  country.innerHTML = data.location.country;
  province.innerHTML = data.location.name + ", ";

  const temperature =
    system === "C"
      ? {
          now: data.current.temp_c,
          forecast: data.forecast.forecastday[dayIndex].day.avgtemp_c,
        }
      : {
          now: data.current.temp_f,
          forecast: data.forecast.forecastday[dayIndex].day.avgtemp_f,
        };

  nowDegree.innerHTML =
    dayIndex === 0
      ? `${Math.round(temperature.now, 1)} °${system}`
      : `${Math.round(parseInt(temperature.forecast), 1)} °${system}`;

  let currentdate = data.forecast.forecastday[dayIndex].date;
  let currentDMY = currentdate.split("-").reverse();
  let todayWeek =
    week[getDay(new Date(+currentDMY[2], +currentDMY[1] - 1, +currentDMY[0]))];
  currentDMY[1] = months[+currentdate.split(" ")[0].split("-")[1]];

  let extraHour = "";
  if (dayIndex == 0) {
    extraHour = " | " + data.location.localtime.split(" ")[1];
  }
  datetext.innerHTML =
    todayWeek +
    " " +
    currentDMY[0] +
    " " +
    currentDMY[1] +
    " " +
    currentDMY[2] +
    extraHour;
  console.log(data);
}

const search = document.getElementById("searchimg");
search.addEventListener("click", async () => {
  let text = document.getElementById("searchinput").value;
  weatherData = await getWeather(text);
  localStorage.setItem("lastLocation", text);
  changeDom(weatherData, currentDay, unit);
});

const dayRight = document.getElementById("dayright");
dayRight.addEventListener("click", async () => {
  if (currentDay === 2) {
    currentDay = 0;
  } else {
    currentDay++;
  }
  changeDom(weatherData, currentDay, unit);
});

const dayLeft = document.getElementById("dayleft");
dayLeft.addEventListener("click", async () => {
  if (currentDay === 0) {
    currentDay = 2;
  } else {
    currentDay--;
  }
  changeDom(weatherData, currentDay, unit);
});
