const cfg = require('../config.json');

module.exports = {
    city,
    forecast,
    dailyCollect,
    getUrlForecast,
    forecastCollect
};

// return the body information about city weather
async function city(weather) {
    return {
        "weather": weather.main,
        "weather_desc": weather.description,
        "temperature" : weather.main.temp,
        "humidity" : weather.main.humidity,
        "wind_speed" : weather.main.wind,
        "city" : weather.name,
        "country" : weather.country,
        "icon": weather.icon,
        "lon" : weather.coord.lon,
        "lat" : weather.coord.lat
    };
}

// return the body information about city weather forecasting 
async function forecast(weather) {
    return {
        "weather": weather.main,
        "weather_desc": weather.description,
        "temperature" : weather.main.temp,
        "humidity" : weather.main.humidity,
        "wind_speed" : weather.main.wind,
        "city" : weather.name,
        "country" : weather.country,
        "icon": weather.icon,
    };
}

// return the coord of actual city to use later in forecasting 
async function getUrlForecast(){
   const { lon, lat } = dailyCollect(url);
   return newURL = "//api.openweathermap.org/data/2.5/weather?lat="+lat+"&lon="+lon+"&appid="+cfg.weatherAPI;
} 

// return all the weather information 
async function dailyCollect(url){
    try {
        const res = await fetch(url);  
        if (res.status >= 400) {throw new Error("Bad response from server");}
    
        // return body section code 
        const data = await res.json();  
        city (data);
               
      } catch (err) {
        console.error(err);
      }
}

async function forecastCollect(url){
    try {
        const res = await fetch(url);  
        if (res.status >= 400) {throw new Error("Bad response from server");}
    
        // return body section code 
        const data = await res.json();  
        return data;
        // need to detail which information will be returned  => task for later in forecast function
        //forecast(data);
               
      } catch (err) {
        console.error(err);
      }
}