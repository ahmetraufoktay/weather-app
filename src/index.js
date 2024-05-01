import "./style.css";
import { getDay } from "date-fns";

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
const weatherData = await getWeather("Istanbul");

const dayImages = importAll(
  require.context("./img/weathers/day", false, /\.(png|jpe?g|svg)$/),
);
const nightImages = importAll(
  require.context("./img/weathers/night", false, /\.(png|jpe?g|svg)$/),
);

changeDom(weatherData);

function setBackground(imgSrc, element, path) {
  element.style.backgroundImage = `url(${imgSrc[`${path}.svg`]})`;
  element.style.backgroundSize = "cover";
}

function changeDom(data) {
  const todayIcon = document.getElementById("today");
  const tomorrowIcon = document.getElementById("tomorrow");
  const overmorrowIcon = document.getElementById("overmorrow");
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

  setBackground(imgSrc, todayIcon, data.current.condition.code);
  setBackground(
    imgSrc,
    tomorrowIcon,
    data.forecast.forecastday[1].day.condition.code,
  );
  setBackground(
    imgSrc,
    overmorrowIcon,
    data.forecast.forecastday[2].day.condition.code,
  );

  country.innerHTML = data.location.country;
  province.innerHTML = data.location.name + ", ";
  nowDegree.innerHTML = data.current.temp_c + "°C";

  let currentdate = data.current.last_updated;
  let currentDMY = currentdate.split(" ")[0].split("-").reverse();
  let todayWeek =
    week[getDay(new Date(currentdate[0], currentdate[1], currentdate[2]))];
  currentDMY[1] = months[+currentdate.split(" ")[0].split("-")[1]];
  datetext.innerHTML =
    todayWeek +
    " " +
    currentDMY[0] +
    " " +
    currentDMY[1] +
    " " +
    currentDMY[2] +
    " | " +
    currentdate.split(" ")[1];
  console.log(data);
}

const search = document.getElementById("searchimg");
search.addEventListener("click", async () => {
  let text = document.getElementById("searchinput").value;
  let data = await getWeather(text);
  changeDom(data);
});
