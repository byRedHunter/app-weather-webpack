require('../assets/css/main.css')

const { Weather } = require('./Weather')
const { UI } = require('./UI')
const { Store } = require('./Store')

const store = new Store()
// obtenemos los datos del localstorage
const { city, countryCode } = store.getLocationData()

const weather = new Weather(city, countryCode)
const ui = new UI()

async function fetchWeather() {
	const data = await weather.getWeather()
	ui.render(data)
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
	e.preventDefault()

	const city = document.getElementById('city').value
	const countryCode = document.getElementById('countryCode').value

	// cambiamos los datos iniciales
	weather.changeLocation(city, countryCode)

	// almacenar en el localstorage
	store.setLocationData(city, countryCode)

	// volvemos a pedir los datos
	fetchWeather()

	ui.clearForm()
})

document.addEventListener('DOMContentLoaded', fetchWeather)
