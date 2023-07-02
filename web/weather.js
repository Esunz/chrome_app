const COORDS = 'coords'
const timeData = document.querySelector("time");
//const apiKey = 'NpzVsuBpaZTQUFcfKqEl%2FUx5ju8A6%2F5LtJCh755PYgXBCuVZxa8d706fMWgEKRvHSe5xTo%2BKNE%2F6g6eiDXRD4w%3D%3D';
const currentWeatherItem = document.querySelector("current-weather-item");
const timezone = document.getElementById('time-zone');
const country = document.getElementById('country');
const weatherForcase = document.getElementById('weather');
const currentTemp = document.getElementById('current-temp');

setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hour12Format = hour >= 13 ? hour %12: hour
    const minutes = time.getMinutes();
    const ampm = hour >=12 ? 'PM' : 'AM'
    console.log(hour);
    console.log(minutes);
    console.log(ampm);
    timeData.innerHTML = hour12Format + ':' + minutes+ ' ' + `<span id="am-pm">${ampm}</span>`
}, 1000);


// function getweather(){

//     fetch(`http://apis.data.go.kr/1360000/AsosDalyInfoService`).then(function(res))


    
// }