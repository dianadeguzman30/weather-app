
const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + latitude + '&lon=' + longitude + '&appid=25242508a140fa05939868b2752448f7&units=metric'
  
    request({ url, json: true }, (error, { body } = {}) => {
      if (error) {
          callback('Unable to Connect to the weather service!', undefined)
      } else if (body.message) {
           callback('Unable to find location!', undefined)
      } else {
            callback(undefined,  'It is currently ' + body.main.temp + '°C' + 
            ' out. It feels like ' + body.main.feels_like + '°C. ' +
             'The weather description is ' + body.weather[0].description)
      }
    })
  }
  module.exports = forecast 