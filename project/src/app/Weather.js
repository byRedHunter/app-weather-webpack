export class Weather {
	constructor(city, countryCode) {
		this.apikey = 'fa61304504e614e1b5e968d5d34720cc'
		this.city = city
		this.countryCode = countryCode
	}

	async getWeather() {
		const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apikey}&units=metric`

		const response = await fetch(URI)
		const data = await response.json()

		return data
	}

	changeLocation(city, countryCode) {
		this.city = city
		this.countryCode = countryCode
	}
}
