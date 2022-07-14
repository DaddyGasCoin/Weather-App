
const key = '85f888c422acb6c020449e2983453f27'

async function getweather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=${key}`)
    const json = await (response.json())
    const description = json.weather[0].description
    const type = json.weather[0].main
    const humidity = json.main.humidity
    const feelLike = json.main.feels_like
    const pressure = json.main.pressure
    const temp = json.main.temp
    const maxtemp = json.main.temp_max
    const mintemp = json.main.temp_min
    const detaills = [description, type, humidity, feelLike, pressure, temp, maxtemp, mintemp]
    detaills.forEach(x => {
        console.log(x)
    });
}

getweather()