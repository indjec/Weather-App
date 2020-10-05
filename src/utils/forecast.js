const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=afe99adbc6e848555677d590cb48f92f&query=' + latitude + ',' + longitude +'&units=f'

    request({url, json:true}, (error, {body}) => {
        if(error){
            callback('Unable to connect to location services!', undefined)
        }else if(body.error){
            callback('Unable to find location. Try another search!', undefined)
        }else{
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. There is a ' + body.current.precip + ' % chances of rain')
        }
    })
}

module.exports = forecast