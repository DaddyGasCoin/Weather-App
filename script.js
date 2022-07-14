
const key = '85f888c422acb6c020449e2983453f27'
let country = ''
async function getweather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&appid=${key}&units=metric`)
    const json = await (response.json())
    const description = await json.weather[0].description
    const type = json.weather[0].main
    const humidity = json.main.humidity
    const feelLike = json.main.feels_like
    const pressure = json.main.pressure
    const temp = json.main.temp
    const maxtemp = json.main.temp_max
    const mintemp = json.main.temp_min
    const detaills = [description, type, humidity, feelLike, pressure, temp, maxtemp, mintemp]
    printdeatails(detaills)
}
const x = document.querySelector('#country')
const btn = document.querySelector('button')
const loader = document.querySelector('.loader')


function printdeatails(arr) {
    const type = document.querySelector('.type')
    const humid = document.querySelector('.humidity-value')
    const temp = document.querySelector('.temp-value')
    const maxtemp = document.querySelector('.max-value')
    const mintemp = document.querySelector('.min-value')
    const pressure = document.querySelector('.pressure-value')

    type.textContent = arr[0]
    humid.textContent = arr[2]
    temp.textContent = arr[5]
    maxtemp.textContent = arr[6]
    mintemp.textContent = arr[7]
    pressure.textContent = arr[4]

    loader.children[0].remove()


}

btn.addEventListener('click', () => {
    country = x.value
    let img = document.createElement('img')
    img.src = 'autorenew_black_24dp.svg'
    img.classList.add('image')
    loader.appendChild(img)
    getweather()
})
