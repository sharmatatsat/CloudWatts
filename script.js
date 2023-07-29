const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '0589b802d3msh67f7c9a4a74a62cp18aad3jsne6692016e801',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};


const getWeather = (city) =>{
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {

        console.log(response)
        cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        // sunrise.innerHTML = response.sunrise
        // sunset.innerHTML = response.sunset

    })
.catch(err => console.error(err));
}    


const getCloudPCT=(city) =>{
    morecity1.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pct2.innerHTML = response.cloud_pct;
})
.catch(err => console.error(err));
}
const getFeelsLike=(city) =>{
    morecity1.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        feels_like2.innerHTML = response.feels_like;
})
.catch(err => console.error(err));
}
const getHumidity=(city) =>{
    morecity1.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        humidity3.innerHTML = response.humidity;
})
.catch(err => console.error(err));
}
const getMaxTemp=(city) =>{
    morecity1.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        max_temp3.innerHTML = response.max_temp;
})
.catch(err => console.error(err));
}
const getMinTemp=(city) =>{
    morecity1.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        min_temp3.innerHTML = response.min_temp;
})
.catch(err => console.error(err));
}
const getWindSpeed=(city) =>{
    morecity1.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_speed3.innerHTML = response.wind_speed;
})
.catch(err => console.error(err));
}
const getWindDegrees=(city) =>{
    morecity1.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_degrees2.innerHTML = response.wind_degrees;
})
.catch(err => console.error(err));
}


const getCloudPCT2=(city) =>{
    morecity2.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pct3.innerHTML = response.cloud_pct;
})
.catch(err => console.error(err));
}
const getFeelsLike2=(city) =>{
    morecity2.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        feels_like3.innerHTML = response.feels_like;
})
.catch(err => console.error(err));
}
const getHumidity2=(city) =>{
    morecity2.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        humidity4.innerHTML = response.humidity;
})
.catch(err => console.error(err));
}
const getMaxTemp2=(city) =>{
    morecity2.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        max_temp4.innerHTML = response.max_temp;
})
.catch(err => console.error(err));
}
const getMinTemp2=(city) =>{
    morecity2.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        min_temp4.innerHTML = response.min_temp;
})
.catch(err => console.error(err));
}
const getWindSpeed2=(city) =>{
    morecity2.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_speed4.innerHTML = response.wind_speed;
})
.catch(err => console.error(err));
}
const getWindDegrees2=(city) =>{
    morecity2.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_degrees3.innerHTML = response.wind_degrees;
})
.catch(err => console.error(err));
}


const getCloudPCT3=(city) =>{
    morecity3.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pct4.innerHTML = response.cloud_pct;
})
.catch(err => console.error(err));
}
const getFeelsLike3=(city) =>{
    morecity3.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        feels_like4.innerHTML = response.feels_like;
})
.catch(err => console.error(err));
}
const getHumidity3=(city) =>{
    morecity3.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        humidity5.innerHTML = response.humidity;
})
.catch(err => console.error(err));
}
const getMaxTemp3=(city) =>{
    morecity3.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        max_temp5.innerHTML = response.max_temp;
})
.catch(err => console.error(err));
}
const getMinTemp3=(city) =>{
    morecity3.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        min_temp5.innerHTML = response.min_temp;
})
.catch(err => console.error(err));
}
const getWindSpeed3=(city) =>{
    morecity3.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_speed5.innerHTML = response.wind_speed;
})
.catch(err => console.error(err));
}
const getWindDegrees3=(city) =>{
    morecity3.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_degrees4.innerHTML = response.wind_degrees;
})
.catch(err => console.error(err));
}


const getCloudPCT4=(city) =>{
    morecity4.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        cloud_pct5.innerHTML = response.cloud_pct;
})
.catch(err => console.error(err));
}
const getFeelsLike4=(city) =>{
    morecity4.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        feels_like5.innerHTML = response.feels_like;
})
.catch(err => console.error(err));
}
const getHumidity4=(city) =>{
    morecity4.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        humidity6.innerHTML = response.humidity;
})
.catch(err => console.error(err));
}
const getMaxTemp4=(city) =>{
    morecity4.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        max_temp6.innerHTML = response.max_temp;
})
.catch(err => console.error(err));
}
const getMinTemp4=(city) =>{
    morecity4.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        min_temp6.innerHTML = response.min_temp;
})
.catch(err => console.error(err));
}
const getWindSpeed4=(city) =>{
    morecity4.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_speed6.innerHTML = response.wind_speed;
})
.catch(err => console.error(err));
}
const getWindDegrees4=(city) =>{
    morecity4.innerHTML  = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
        console.log(response);
        wind_degrees5.innerHTML = response.wind_degrees;
})
.catch(err => console.error(err));
}

submit.addEventListener("click",(e) => {
    e.preventDefault();
    getWeather(city.value)
})


getWeather("Delhi");

getCloudPCT("Shanghai");
getFeelsLike("Shanghai");
getHumidity("Shanghai");
getMaxTemp("Shanghai");
getMinTemp("Shanghai");
getWindDegrees("Shanghai");
getWindSpeed("Shanghai");


getCloudPCT2("Chicago");
getFeelsLike2("Chicago");
getHumidity2("Chicago");
getMaxTemp2("Chicago");
getMinTemp2("Chicago");
getWindDegrees2("Chicago");
getWindSpeed2("Chicago");



getCloudPCT3("Sydney");
getFeelsLike3("Sydney");
getHumidity3("Sydney");
getMaxTemp3("Sydney");
getMinTemp3("Sydney");
getWindDegrees3("Sydney");
getWindSpeed3("Sydney");



getCloudPCT4("New York");
getFeelsLike4("New York");
getHumidity4("New York");
getMaxTemp4("New York");
getMinTemp4("New York");
getWindDegrees4("New York");
getWindSpeed4("New York");