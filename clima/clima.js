const axios = require('axios');

const getClima = async(lat, lng) => {

    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&appid=023660c162579af18a3dbd47b2a45012`;

    let resp = await axios.get(url);
    
    let tempC = resp.data.main.temp - 273;

    return tempC;
}

module.exports = {
    getClima
}