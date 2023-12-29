const url = 'https://weatherapi-com.p.rapidapi.com/forecast.json?q=jabalpur&days=5';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '808b0c181amshad633dd4481cea6p1c5715jsn4cd8c1d3100e',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

fetch('https://weatherapi-com.p.rapidapi.com/forecast.json?q=jabalpur&days=5', options)
.then(response => response.json())
.then((response) => {
	
	
	console.log(response)



    timey1.innerHTML =response.forecast.forecastday[2].hour[0].time
    windy1.innerHTML =response.forecast.forecastday[2].hour[0].wind_mph
    dwindy1.innerHTML =response.forecast.forecastday[2].hour[0].wind_dir
    humiy1.innerHTML =response.forecast.forecastday[2].hour[0].humidity
    heatiny1.innerHTML =response.forecast.forecastday[2].hour[0].heatindex_c
    tempey1.innerHTML =response.forecast.forecastday[2].hour[0].temp_c
    pressy1.innerHTML =response.forecast.forecastday[2].hour[0].pressure_mb
    cloudy1.innerHTML =response.forecast.forecastday[2].hour[0].cloud
    Chancey1.innerHTML =response.forecast.forecastday[2].hour[0].chance_of_rain
    Rainy1.innerHTML =response.forecast.forecastday[2].hour[0].will_it_rain


    
    timey2.innerHTML =response.forecast.forecastday[2].hour[1].time
    windy2.innerHTML =response.forecast.forecastday[2].hour[1].wind_mph
    dwindy2.innerHTML =response.forecast.forecastday[2].hour[1].wind_dir
    humiy2.innerHTML =response.forecast.forecastday[2].hour[1].humidity
    heatiny2.innerHTML =response.forecast.forecastday[2].hour[1].heatindex_c
    tempey2.innerHTML =response.forecast.forecastday[2].hour[1].temp_c
    pressy2.innerHTML =response.forecast.forecastday[2].hour[1].pressure_mb
    cloudy2.innerHTML =response.forecast.forecastday[2].hour[1].cloud
    Chancey2.innerHTML =response.forecast.forecastday[2].hour[1].chance_of_rain
    Rainy2.innerHTML =response.forecast.forecastday[2].hour[1].will_it_rain



    timey3.innerHTML =response.forecast.forecastday[2].hour[2].time
    windy3.innerHTML =response.forecast.forecastday[2].hour[2].wind_mph
    dwindy3.innerHTML =response.forecast.forecastday[2].hour[2].wind_dir
    humiy3.innerHTML =response.forecast.forecastday[2].hour[2].humidity
    heatiny3.innerHTML =response.forecast.forecastday[2].hour[2].heatindex_c
    tempey3.innerHTML =response.forecast.forecastday[2].hour[2].temp_c
    pressy3.innerHTML =response.forecast.forecastday[2].hour[2].pressure_mb
    cloudy3.innerHTML =response.forecast.forecastday[2].hour[2].cloud
    Chancey3.innerHTML =response.forecast.forecastday[2].hour[2].chance_of_rain
    Rainy3.innerHTML =response.forecast.forecastday[2].hour[2].will_it_rain



    timey4.innerHTML =response.forecast.forecastday[2].hour[3].time
    windy4.innerHTML =response.forecast.forecastday[2].hour[3].wind_mph
    dwindy4.innerHTML =response.forecast.forecastday[2].hour[3].wind_dir
    humiy4.innerHTML =response.forecast.forecastday[2].hour[3].humidity
    heatiny4.innerHTML =response.forecast.forecastday[2].hour[3].heatindex_c
    tempey4.innerHTML =response.forecast.forecastday[2].hour[3].temp_c
    pressy4.innerHTML =response.forecast.forecastday[2].hour[3].pressure_mb
    cloudy4.innerHTML =response.forecast.forecastday[2].hour[3].cloud
    Chancey4.innerHTML =response.forecast.forecastday[2].hour[3].chance_of_rain
    Rainy4.innerHTML =response.forecast.forecastday[2].hour[3].will_it_rain



    timey5.innerHTML =response.forecast.forecastday[2].hour[4].time
    windy5.innerHTML =response.forecast.forecastday[2].hour[4].wind_mph
    dwindy5.innerHTML =response.forecast.forecastday[2].hour[4].wind_dir
    humiy5.innerHTML =response.forecast.forecastday[2].hour[4].humidity
    heatiny5.innerHTML =response.forecast.forecastday[2].hour[4].heatindex_c
    tempey5.innerHTML =response.forecast.forecastday[2].hour[4].temp_c
    pressy5.innerHTML =response.forecast.forecastday[2].hour[4].pressure_mb
    cloudy5.innerHTML =response.forecast.forecastday[2].hour[4].cloud
    Chancey5.innerHTML =response.forecast.forecastday[2].hour[4].chance_of_rain
    Rainy5.innerHTML =response.forecast.forecastday[2].hour[4].will_it_rain



    timey6.innerHTML =response.forecast.forecastday[2].hour[5].time
    windy6.innerHTML =response.forecast.forecastday[2].hour[5].wind_mph
    dwindy6.innerHTML =response.forecast.forecastday[2].hour[5].wind_dir
    humiy6.innerHTML =response.forecast.forecastday[2].hour[5].humidity
    heatiny6.innerHTML =response.forecast.forecastday[2].hour[5].heatindex_c
    tempey6.innerHTML =response.forecast.forecastday[2].hour[5].temp_c
    pressy6.innerHTML =response.forecast.forecastday[2].hour[5].pressure_mb
    cloudy6.innerHTML =response.forecast.forecastday[2].hour[5].cloud
    Chancey6.innerHTML =response.forecast.forecastday[2].hour[5].chance_of_rain
    Rainy6.innerHTML =response.forecast.forecastday[2].hour[5].will_it_rain



    timey7.innerHTML =response.forecast.forecastday[2].hour[6].time
    windy7.innerHTML =response.forecast.forecastday[2].hour[6].wind_mph
    dwindy7.innerHTML =response.forecast.forecastday[2].hour[6].wind_dir
    humiy7.innerHTML =response.forecast.forecastday[2].hour[6].humidity
    heatiny7.innerHTML =response.forecast.forecastday[2].hour[6].heatindex_c
    tempey7.innerHTML =response.forecast.forecastday[2].hour[6].temp_c
    pressy7.innerHTML =response.forecast.forecastday[2].hour[6].pressure_mb
    cloudy7.innerHTML =response.forecast.forecastday[2].hour[6].cloud
    Chancey7.innerHTML =response.forecast.forecastday[2].hour[6].chance_of_rain
    Rainy7.innerHTML =response.forecast.forecastday[2].hour[6].will_it_rain



    timey8.innerHTML =response.forecast.forecastday[2].hour[7].time
    windy8.innerHTML =response.forecast.forecastday[2].hour[7].wind_mph
    dwindy8.innerHTML =response.forecast.forecastday[2].hour[7].wind_dir
    humiy8.innerHTML =response.forecast.forecastday[2].hour[7].humidity
    heatiny8.innerHTML =response.forecast.forecastday[2].hour[7].heatindex_c
    tempey8.innerHTML =response.forecast.forecastday[2].hour[7].temp_c
    pressy8.innerHTML =response.forecast.forecastday[2].hour[7].pressure_mb
    cloudy8.innerHTML =response.forecast.forecastday[2].hour[7].cloud
    Chancey8.innerHTML =response.forecast.forecastday[2].hour[7].chance_of_rain
    Rainy8.innerHTML =response.forecast.forecastday[2].hour[7].will_it_rain



    timey9.innerHTML =response.forecast.forecastday[2].hour[8].time
    windy9.innerHTML =response.forecast.forecastday[2].hour[8].wind_mph
    dwindy9.innerHTML =response.forecast.forecastday[2].hour[8].wind_dir
    humiy9.innerHTML =response.forecast.forecastday[2].hour[8].humidity
    heatiny9.innerHTML =response.forecast.forecastday[2].hour[8].heatindex_c
    tempey9.innerHTML =response.forecast.forecastday[2].hour[8].temp_c
    pressy9.innerHTML =response.forecast.forecastday[2].hour[8].pressure_mb
    cloudy9.innerHTML =response.forecast.forecastday[2].hour[8].cloud
    Chancey9.innerHTML =response.forecast.forecastday[2].hour[8].chance_of_rain
    Rainy9.innerHTML =response.forecast.forecastday[2].hour[8].will_it_rain



    timey10.innerHTML =response.forecast.forecastday[2].hour[9].time
    windy10.innerHTML =response.forecast.forecastday[2].hour[9].wind_mph
    dwindy10.innerHTML =response.forecast.forecastday[2].hour[9].wind_dir
    humiy10.innerHTML =response.forecast.forecastday[2].hour[9].humidity
    heatiny10.innerHTML =response.forecast.forecastday[2].hour[9].heatindex_c
    tempey10.innerHTML =response.forecast.forecastday[2].hour[9].temp_c
    pressy10.innerHTML =response.forecast.forecastday[2].hour[9].pressure_mb
    cloudy10.innerHTML =response.forecast.forecastday[2].hour[9].cloud
    Chancey10.innerHTML =response.forecast.forecastday[2].hour[9].chance_of_rain
    Rainy10.innerHTML =response.forecast.forecastday[2].hour[9].will_it_rain



    timey11.innerHTML =response.forecast.forecastday[2].hour[10].time
    windy11.innerHTML =response.forecast.forecastday[2].hour[10].wind_mph
    dwindy11.innerHTML =response.forecast.forecastday[2].hour[10].wind_dir
    humiy11.innerHTML =response.forecast.forecastday[2].hour[10].humidity
    heatiny11.innerHTML =response.forecast.forecastday[2].hour[10].heatindex_c
    tempey11.innerHTML =response.forecast.forecastday[2].hour[10].temp_c
    pressy11.innerHTML =response.forecast.forecastday[2].hour[10].pressure_mb
    cloudy11.innerHTML =response.forecast.forecastday[2].hour[10].cloud
    Chancey11.innerHTML =response.forecast.forecastday[2].hour[10].chance_of_rain
    Rainy11.innerHTML =response.forecast.forecastday[2].hour[10].will_it_rain



    timey12.innerHTML =response.forecast.forecastday[2].hour[11].time
    windy12.innerHTML =response.forecast.forecastday[2].hour[11].wind_mph
    dwindy12.innerHTML =response.forecast.forecastday[2].hour[11].wind_dir
    humiy12.innerHTML =response.forecast.forecastday[2].hour[11].humidity
    heatiny12.innerHTML =response.forecast.forecastday[2].hour[11].heatindex_c
    tempey12.innerHTML =response.forecast.forecastday[2].hour[11].temp_c
    pressy12.innerHTML =response.forecast.forecastday[2].hour[11].pressure_mb
    cloudy12.innerHTML =response.forecast.forecastday[2].hour[11].cloud
    Chancey12.innerHTML =response.forecast.forecastday[2].hour[11].chance_of_rain
    Rainy12.innerHTML =response.forecast.forecastday[2].hour[11].will_it_rain



    timey13.innerHTML =response.forecast.forecastday[2].hour[12].time
    windy13.innerHTML =response.forecast.forecastday[2].hour[12].wind_mph
    dwindy13.innerHTML =response.forecast.forecastday[2].hour[12].wind_dir
    humiy13.innerHTML =response.forecast.forecastday[2].hour[12].humidity
    heatiny13.innerHTML =response.forecast.forecastday[2].hour[12].heatindex_c
    tempey13.innerHTML =response.forecast.forecastday[2].hour[12].temp_c
    pressy13.innerHTML =response.forecast.forecastday[2].hour[12].pressure_mb
    cloudy13.innerHTML =response.forecast.forecastday[2].hour[12].cloud
    Chancey13.innerHTML =response.forecast.forecastday[2].hour[12].chance_of_rain
    Rainy13.innerHTML =response.forecast.forecastday[2].hour[12].will_it_rain



    timey14.innerHTML = response.forecast.forecastday[2].hour[13].time
    windy14.innerHTML = response.forecast.forecastday[2].hour[13].wind_mph
    dwindy14.innerHTML = response.forecast.forecastday[2].hour[13].wind_dir
    humiy14.innerHTML = response.forecast.forecastday[2].hour[13].humidity
    heatiny14.innerHTML =response.forecast.forecastday[2].hour[13].heatindex_c
    tempey14.innerHTML = response.forecast.forecastday[2].hour[13].temp_c
    pressy14.innerHTML = response.forecast.forecastday[2].hour[13].pressure_mb
    cloudy14.innerHTML = response.forecast.forecastday[2].hour[13].cloud
    Chancey14.innerHTML =response.forecast.forecastday[2].hour[13].chance_of_rain
    Rainy14.innerHTML =response.forecast.forecastday[2].hour[13].will_it_rain



    timey15.innerHTML = response.forecast.forecastday[2].hour[14].time
    windy15.innerHTML = response.forecast.forecastday[2].hour[14].wind_mph
    dwindy15.innerHTML = response.forecast.forecastday[2].hour[14].wind_dir
    humiy15.innerHTML = response.forecast.forecastday[2].hour[14].humidity
    heatiny15.innerHTML =response.forecast.forecastday[2].hour[14].heatindex_c
    tempey15.innerHTML = response.forecast.forecastday[2].hour[14].temp_c
    pressy15.innerHTML = response.forecast.forecastday[2].hour[14].pressure_mb
    cloudy15.innerHTML = response.forecast.forecastday[2].hour[14].cloud
    Chancey15.innerHTML =response.forecast.forecastday[2].hour[14].chance_of_rain
    Rainy15.innerHTML =response.forecast.forecastday[2].hour[14].will_it_rain



    timey16.innerHTML = response.forecast.forecastday[2].hour[15].time
    windy16.innerHTML = response.forecast.forecastday[2].hour[15].wind_mph
    dwindy16.innerHTML = response.forecast.forecastday[2].hour[15].wind_dir
    humiy16.innerHTML = response.forecast.forecastday[2].hour[15].humidity
    heatiny16.innerHTML =response.forecast.forecastday[2].hour[15].heatindex_c
    tempey16.innerHTML = response.forecast.forecastday[2].hour[15].temp_c
    pressy16.innerHTML = response.forecast.forecastday[2].hour[15].pressure_mb
    cloudy16.innerHTML = response.forecast.forecastday[2].hour[15].cloud
    Chancey16.innerHTML =response.forecast.forecastday[2].hour[15].chance_of_rain
    Rainy16.innerHTML =response.forecast.forecastday[2].hour[15].will_it_rain



    timey17.innerHTML = response.forecast.forecastday[2].hour[16].time
    windy17.innerHTML = response.forecast.forecastday[2].hour[16].wind_mph
    dwindy17.innerHTML = response.forecast.forecastday[2].hour[16].wind_dir
    humiy17.innerHTML = response.forecast.forecastday[2].hour[16].humidity
    heatiny17.innerHTML =response.forecast.forecastday[2].hour[16].heatindex_c
    tempey17.innerHTML = response.forecast.forecastday[2].hour[16].temp_c
    pressy17.innerHTML = response.forecast.forecastday[2].hour[16].pressure_mb
    cloudy17.innerHTML = response.forecast.forecastday[2].hour[16].cloud
    Chancey17.innerHTML =response.forecast.forecastday[2].hour[16].chance_of_rain
    Rainy17.innerHTML =response.forecast.forecastday[2].hour[16].will_it_rain



    timey18.innerHTML = response.forecast.forecastday[2].hour[17].time
    windy18.innerHTML = response.forecast.forecastday[2].hour[17].wind_mph
    dwindy18.innerHTML = response.forecast.forecastday[2].hour[17].wind_dir
    humiy18.innerHTML = response.forecast.forecastday[2].hour[17].humidity
    heatiny18.innerHTML =response.forecast.forecastday[2].hour[17].heatindex_c
    tempey18.innerHTML = response.forecast.forecastday[2].hour[17].temp_c
    pressy18.innerHTML = response.forecast.forecastday[2].hour[17].pressure_mb
    cloudy18.innerHTML = response.forecast.forecastday[2].hour[17].cloud
    Chancey18.innerHTML =response.forecast.forecastday[2].hour[17].chance_of_rain
    Rainy18.innerHTML =response.forecast.forecastday[2].hour[17].will_it_rain



    timey19.innerHTML = response.forecast.forecastday[2].hour[18].time
    windy19.innerHTML = response.forecast.forecastday[2].hour[18].wind_mph
    dwindy19.innerHTML = response.forecast.forecastday[2].hour[18].wind_dir
    humiy19.innerHTML = response.forecast.forecastday[2].hour[18].humidity
    heatiny19.innerHTML =response.forecast.forecastday[2].hour[18].heatindex_c
    tempey19.innerHTML = response.forecast.forecastday[2].hour[18].temp_c
    pressy19.innerHTML = response.forecast.forecastday[2].hour[18].pressure_mb
    cloudy19.innerHTML = response.forecast.forecastday[2].hour[18].cloud
    Chancey19.innerHTML =response.forecast.forecastday[2].hour[18].chance_of_rain
    Rainy19.innerHTML =response.forecast.forecastday[2].hour[18].will_it_rain



    timey20.innerHTML = response.forecast.forecastday[2].hour[19].time
    windy20.innerHTML = response.forecast.forecastday[2].hour[19].wind_mph
    dwindy20.innerHTML = response.forecast.forecastday[2].hour[19].wind_dir
    humiy20.innerHTML = response.forecast.forecastday[2].hour[19].humidity
    heatiny20.innerHTML =response.forecast.forecastday[2].hour[19].heatindex_c
    tempey20.innerHTML = response.forecast.forecastday[2].hour[19].temp_c
    pressy20.innerHTML = response.forecast.forecastday[2].hour[19].pressure_mb
    cloudy20.innerHTML = response.forecast.forecastday[2].hour[19].cloud 
    Chancey20.innerHTML =response.forecast.forecastday[2].hour[19].chance_of_rain
    Rainy20.innerHTML =response.forecast.forecastday[2].hour[19].will_it_rain



    timey21.innerHTML = response.forecast.forecastday[2].hour[20].time
    windy21.innerHTML = response.forecast.forecastday[2].hour[20].wind_mph
    dwindy21.innerHTML = response.forecast.forecastday[2].hour[20].wind_dir
    humiy21.innerHTML = response.forecast.forecastday[2].hour[20].humidity
    heatiny21.innerHTML =response.forecast.forecastday[2].hour[20].heatindex_c
    tempey21.innerHTML = response.forecast.forecastday[2].hour[20].temp_c
    pressy21.innerHTML = response.forecast.forecastday[2].hour[20].pressure_mb
    cloudy21.innerHTML = response.forecast.forecastday[2].hour[20].cloud
    Chancey21.innerHTML =response.forecast.forecastday[2].hour[20].chance_of_rain
    Rainy21.innerHTML =response.forecast.forecastday[2].hour[20].will_it_rain



    timey22.innerHTML = response.forecast.forecastday[2].hour[21].time
    windy22.innerHTML = response.forecast.forecastday[2].hour[21].wind_mph
    dwindy22.innerHTML = response.forecast.forecastday[2].hour[21].wind_dir
    humiy22.innerHTML = response.forecast.forecastday[2].hour[21].humidity
    heatiny22.innerHTML =response.forecast.forecastday[2].hour[21].heatindex_c
    tempey22.innerHTML = response.forecast.forecastday[2].hour[21].temp_c
    pressy22.innerHTML = response.forecast.forecastday[2].hour[21].pressure_mb
    cloudy22.innerHTML = response.forecast.forecastday[2].hour[21].cloud
    Chancey22.innerHTML =response.forecast.forecastday[2].hour[21].chance_of_rain
    Rainy22.innerHTML =response.forecast.forecastday[2].hour[21].will_it_rain



    timey23.innerHTML = response.forecast.forecastday[2].hour[22].time
    windy23.innerHTML = response.forecast.forecastday[2].hour[22].wind_mph
    dwindy23.innerHTML = response.forecast.forecastday[2].hour[22].wind_dir
    humiy23.innerHTML = response.forecast.forecastday[2].hour[22].humidity
    heatiny23.innerHTML =response.forecast.forecastday[2].hour[22].heatindex_c
    tempey23.innerHTML = response.forecast.forecastday[2].hour[22].temp_c
    pressy23.innerHTML = response.forecast.forecastday[2].hour[22].pressure_mb
    cloudy23.innerHTML = response.forecast.forecastday[2].hour[22].cloud 
    Chancey23.innerHTML =response.forecast.forecastday[2].hour[22].chance_of_rain
    Rainy23.innerHTML =response.forecast.forecastday[2].hour[22].will_it_rain



    timey24.innerHTML = response.forecast.forecastday[2].hour[23].time
    windy24.innerHTML = response.forecast.forecastday[2].hour[23].wind_mph
    dwindy24.innerHTML = response.forecast.forecastday[2].hour[23].wind_dir
    humiy24.innerHTML = response.forecast.forecastday[2].hour[23].humidity
    heatiny24.innerHTML =response.forecast.forecastday[2].hour[23].heatindex_c
    tempey24.innerHTML = response.forecast.forecastday[2].hour[23].temp_c
    pressy24.innerHTML = response.forecast.forecastday[2].hour[23].pressure_mb
    cloudy24.innerHTML = response.forecast.forecastday[2].hour[23].cloud
    Chancey24.innerHTML =response.forecast.forecastday[2].hour[23].chance_of_rain
    Rainy24.innerHTML =response.forecast.forecastday[2].hour[23].will_it_rain

   


})
.catch(err => console.error(err));