const COORDS = 'coords'
const timeData = document.querySelector(".time");
const dateDate = document.querySelector(".date")
const currentWeatherItem = document.querySelector("current-weather-item");
const timezone = document.getElementById('time-zone');
const country = document.getElementById('country');
const weatherForcase = document.getElementById('weather');
const currentTemp = document.getElementById('current-temp');

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const API_KEY = 'b60326f54e1c29899d024f74aad3212b';

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

    dateDate.innerHTML = days[day] + ', ' + date + ' ' + months[month]

}, 1000);


getweather()

function getweather() {

    navigator.geolocation.getCurrentPosition((success) => { //getCurrentPosition은 success콜백만을 취급한다. 성공하면 => 다음행위를 실행함

        console.log(success);

        let {latitude, longitude} = success.coords;  //조금더 공부해야함.

     
    
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=
        ${latitude}&lon=${longitude}&appid=
        ${API_KEY}`).then(res => res.json()).then(data => {

            console.log(data)
            
        })

    })
    
   

}