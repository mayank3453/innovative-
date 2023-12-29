const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=jabalpur&days=3';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '808b0c181amshad633dd4481cea6p1c5715jsn4cd8c1d3100e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};




	

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=jabalpur&days=3', options)
.then(response => response.json())
.then((response) => {
	
	
	console.log(response)

	 date.innerHTML = response.forecast.forecastday[0].date;
	 date_2.innerHTML = response.forecast.forecastday[1].date;
	 date_3.innerHTML = response.forecast.forecastday[2].date;
	
	 avg_hum.innerHTML =response.forecast.forecastday[0].day.avghumidity;
	avg_temp.innerHTML =response.forecast.forecastday[0].day.avgtemp_c;
	chance_rain.innerHTML =response.forecast.forecastday[0].day.daily_chance_of_rain
	 will_rain.innerHTML =response.forecast.forecastday[0].day.daily_will_it_rain
	 precip_mm.innerHTML =response.forecast.forecastday[0].day.totalprecip_mm
	 max_temp.innerHTML =response.forecast.forecastday[0].day.maxtemp_c
	 min_temp.innerHTML =response.forecast.forecastday[0].day.mintemp_c
	


	 avg_hum1.innerHTML =response.forecast.forecastday[1].day.avghumidity;
	avg_temp1.innerHTML =response.forecast.forecastday[1].day.avgtemp_c;
	chance_rain1.innerHTML =response.forecast.forecastday[1].day.daily_chance_of_rain
	 will_rain1.innerHTML =response.forecast.forecastday[1].day.daily_will_it_rain
	 precip_mm1.innerHTML =response.forecast.forecastday[1].day.totalprecip_mm
	 max_temp1.innerHTML =response.forecast.forecastday[1].day.maxtemp_c
	 min_temp1.innerHTML =response.forecast.forecastday[1].day.mintemp_c

	 avg_hum2.innerHTML =response.forecast.forecastday[2].day.avghumidity;
	avg_temp2.innerHTML =response.forecast.forecastday[2].day.avgtemp_c;
	chance_rain2.innerHTML =response.forecast.forecastday[2].day.daily_chance_of_rain
	 will_rain2.innerHTML =response.forecast.forecastday[2].day.daily_will_it_rain
	 precip_mm2.innerHTML =response.forecast.forecastday[2].day.totalprecip_mm
	 max_temp2.innerHTML =response.forecast.forecastday[2].day.maxtemp_c
	 min_temp2.innerHTML =response.forecast.forecastday[2].day.mintemp_c
	 windter.innerHTML =response.current.wind_mph
	 windre.innerHTML =response.current.wind_dir
	 

// Day 1
















})
.catch(err => console.error(err));
