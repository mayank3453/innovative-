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



    time1.innerHTML =response.forecast.forecastday[0].hour[0].time
    wind1.innerHTML =response.forecast.forecastday[0].hour[0].wind_mph
    dwind1.innerHTML =response.forecast.forecastday[0].hour[0].wind_dir
    humi1.innerHTML =response.forecast.forecastday[0].hour[0].humidity
    heatin1.innerHTML =response.forecast.forecastday[0].hour[0].heatindex_c
    tempe11.innerHTML =response.forecast.forecastday[0].hour[0].temp_c
    press1.innerHTML =response.forecast.forecastday[0].hour[0].pressure_mb
    cloud1.innerHTML =response.forecast.forecastday[0].hour[0].cloud










    time2.innerHTML =response.forecast.forecastday[0].hour[1].time
    wind2.innerHTML =response.forecast.forecastday[0].hour[1].wind_mph
    dwind2.innerHTML =response.forecast.forecastday[0].hour[1].wind_dir
    humi2.innerHTML =response.forecast.forecastday[0].hour[1].humidity
    heatin2.innerHTML =response.forecast.forecastday[0].hour[1].heatindex_c
    tempe12.innerHTML =response.forecast.forecastday[0].hour[1].temp_c
    press2.innerHTML =response.forecast.forecastday[0].hour[1].pressure_mb
    cloud2.innerHTML =response.forecast.forecastday[0].hour[1].cloud


    time3.innerHTML =response.forecast.forecastday[0].hour[2].time
    wind3.innerHTML =response.forecast.forecastday[0].hour[2].wind_mph
    dwind3.innerHTML =response.forecast.forecastday[0].hour[2].wind_dir
    humi3.innerHTML =response.forecast.forecastday[0].hour[2].humidity
    heatin3.innerHTML =response.forecast.forecastday[0].hour[2].heatindex_c
    tempe13.innerHTML =response.forecast.forecastday[0].hour[2].temp_c
    press3.innerHTML =response.forecast.forecastday[0].hour[2].pressure_mb
    cloud3.innerHTML =response.forecast.forecastday[0].hour[2].cloud


    time4.innerHTML =response.forecast.forecastday[0].hour[3].time
    wind4.innerHTML =response.forecast.forecastday[0].hour[3].wind_mph
    dwind4.innerHTML =response.forecast.forecastday[0].hour[3].wind_dir
    humi4.innerHTML =response.forecast.forecastday[0].hour[3].humidity
    heatin4.innerHTML =response.forecast.forecastday[0].hour[3].heatindex_c
    tempe14.innerHTML =response.forecast.forecastday[0].hour[3].temp_c
    press4.innerHTML =response.forecast.forecastday[0].hour[3].pressure_mb
    cloud4.innerHTML =response.forecast.forecastday[0].hour[3].cloud


    time5.innerHTML =response.forecast.forecastday[0].hour[4].time
    wind5.innerHTML =response.forecast.forecastday[0].hour[4].wind_mph
    dwind5.innerHTML =response.forecast.forecastday[0].hour[4].wind_dir
    humi5.innerHTML =response.forecast.forecastday[0].hour[4].humidity
    heatin5.innerHTML =response.forecast.forecastday[0].hour[4].heatindex_c
    tempe15.innerHTML =response.forecast.forecastday[0].hour[4].temp_c
    press5.innerHTML =response.forecast.forecastday[0].hour[4].pressure_mb
    cloud5.innerHTML =response.forecast.forecastday[0].hour[4].cloud


    time6.innerHTML =response.forecast.forecastday[0].hour[5].time
    wind6.innerHTML =response.forecast.forecastday[0].hour[5].wind_mph
    dwind6.innerHTML =response.forecast.forecastday[0].hour[5].wind_dir
    humi6.innerHTML =response.forecast.forecastday[0].hour[5].humidity
    heatin6.innerHTML =response.forecast.forecastday[0].hour[5].heatindex_c
    tempe16.innerHTML =response.forecast.forecastday[0].hour[5].temp_c
    press6.innerHTML =response.forecast.forecastday[0].hour[5].pressure_mb
    cloud6.innerHTML =response.forecast.forecastday[0].hour[5].cloud


    time7.innerHTML =response.forecast.forecastday[0].hour[6].time
    wind7.innerHTML =response.forecast.forecastday[0].hour[6].wind_mph
    dwind7.innerHTML =response.forecast.forecastday[0].hour[6].wind_dir
    humi7.innerHTML =response.forecast.forecastday[0].hour[6].humidity
    heatin7.innerHTML =response.forecast.forecastday[0].hour[6].heatindex_c
    tempe17.innerHTML =response.forecast.forecastday[0].hour[6].temp_c
    press7.innerHTML =response.forecast.forecastday[0].hour[6].pressure_mb
    cloud7.innerHTML =response.forecast.forecastday[0].hour[6].cloud


    time8.innerHTML =response.forecast.forecastday[0].hour[7].time
    wind8.innerHTML =response.forecast.forecastday[0].hour[7].wind_mph
    dwind8.innerHTML =response.forecast.forecastday[0].hour[7].wind_dir
    humi8.innerHTML =response.forecast.forecastday[0].hour[7].humidity
    heatin8.innerHTML =response.forecast.forecastday[0].hour[7].heatindex_c
    tempe18.innerHTML =response.forecast.forecastday[0].hour[7].temp_c
    press8.innerHTML =response.forecast.forecastday[0].hour[7].pressure_mb
    cloud8.innerHTML =response.forecast.forecastday[0].hour[7].cloud


    time9.innerHTML =response.forecast.forecastday[0].hour[8].time
    wind9.innerHTML =response.forecast.forecastday[0].hour[8].wind_mph
    dwind9.innerHTML =response.forecast.forecastday[0].hour[8].wind_dir
    humi9.innerHTML =response.forecast.forecastday[0].hour[8].humidity
    heatin9.innerHTML =response.forecast.forecastday[0].hour[8].heatindex_c
    tempe19.innerHTML =response.forecast.forecastday[0].hour[8].temp_c
    press9.innerHTML =response.forecast.forecastday[0].hour[8].pressure_mb
    cloud9.innerHTML =response.forecast.forecastday[0].hour[8].cloud

    
    time10.innerHTML =response.forecast.forecastday[0].hour[9].time
    wind10.innerHTML =response.forecast.forecastday[0].hour[9].wind_mph
    dwind10.innerHTML =response.forecast.forecastday[0].hour[9].wind_dir
    humi10.innerHTML =response.forecast.forecastday[0].hour[9].humidity
    heatin10.innerHTML =response.forecast.forecastday[0].hour[9].heatindex_c
    tempe110.innerHTML =response.forecast.forecastday[0].hour[9].temp_c
    press10.innerHTML =response.forecast.forecastday[0].hour[9].pressure_mb
    cloud10.innerHTML =response.forecast.forecastday[0].hour[9].cloud


    time11.innerHTML =response.forecast.forecastday[0].hour[10].time
    wind11.innerHTML =response.forecast.forecastday[0].hour[10].wind_mph
    dwind11.innerHTML =response.forecast.forecastday[0].hour[10].wind_dir
    humi11.innerHTML =response.forecast.forecastday[0].hour[10].humidity
    heatin11.innerHTML =response.forecast.forecastday[0].hour[10].heatindex_c
    tempe111.innerHTML =response.forecast.forecastday[0].hour[10].temp_c
    press11.innerHTML =response.forecast.forecastday[0].hour[10].pressure_mb
    cloud11.innerHTML =response.forecast.forecastday[0].hour[10].cloud


    time12.innerHTML =response.forecast.forecastday[0].hour[11].time
    wind12.innerHTML =response.forecast.forecastday[0].hour[11].wind_mph
    dwind12.innerHTML =response.forecast.forecastday[0].hour[11].wind_dir
    humi12.innerHTML =response.forecast.forecastday[0].hour[11].humidity
    heatin12.innerHTML =response.forecast.forecastday[0].hour[11].heatindex_c
    tempe112.innerHTML =response.forecast.forecastday[0].hour[11].temp_c
    press12.innerHTML =response.forecast.forecastday[0].hour[11].pressure_mb
    cloud12.innerHTML =response.forecast.forecastday[0].hour[11].cloud


    time13.innerHTML =response.forecast.forecastday[0].hour[12].time
    wind13.innerHTML =response.forecast.forecastday[0].hour[12].wind_mph
    dwind13.innerHTML =response.forecast.forecastday[0].hour[12].wind_dir
    humi13.innerHTML =response.forecast.forecastday[0].hour[12].humidity
    heatin13.innerHTML =response.forecast.forecastday[0].hour[12].heatindex_c
    tempe113.innerHTML =response.forecast.forecastday[0].hour[12].temp_c
    press13.innerHTML =response.forecast.forecastday[0].hour[12].pressure_mb
    cloud13.innerHTML =response.forecast.forecastday[0].hour[12].cloud


    time14.innerHTML =response.forecast.forecastday[0].hour[13].time
    wind14.innerHTML =response.forecast.forecastday[0].hour[13].wind_mph
    dwind14.innerHTML =response.forecast.forecastday[0].hour[13].wind_dir
    humi14.innerHTML =response.forecast.forecastday[0].hour[13].humidity
    heatin14.innerHTML =response.forecast.forecastday[0].hour[13].heatindex_c
    tempe114.innerHTML =response.forecast.forecastday[0].hour[13].temp_c
    press14.innerHTML =response.forecast.forecastday[0].hour[13].pressure_mb
    cloud14.innerHTML =response.forecast.forecastday[0].hour[13].cloud


    time15.innerHTML =response.forecast.forecastday[0].hour[14].time
    wind15.innerHTML =response.forecast.forecastday[0].hour[14].wind_mph
    dwind15.innerHTML =response.forecast.forecastday[0].hour[14].wind_dir
    humi15.innerHTML =response.forecast.forecastday[0].hour[14].humidity
    heatin15.innerHTML =response.forecast.forecastday[0].hour[14].heatindex_c
    tempe115.innerHTML =response.forecast.forecastday[0].hour[14].temp_c
    press15.innerHTML =response.forecast.forecastday[0].hour[14].pressure_mb
    cloud15.innerHTML =response.forecast.forecastday[0].hour[14].cloud


    time16.innerHTML =response.forecast.forecastday[0].hour[15].time
    wind16.innerHTML =response.forecast.forecastday[0].hour[15].wind_mph
    dwind16.innerHTML =response.forecast.forecastday[0].hour[15].wind_dir
    humi16.innerHTML =response.forecast.forecastday[0].hour[15].humidity
    heatin16.innerHTML =response.forecast.forecastday[0].hour[15].heatindex_c
    tempe116.innerHTML =response.forecast.forecastday[0].hour[15].temp_c
    press16.innerHTML =response.forecast.forecastday[0].hour[15].pressure_mb
    cloud16.innerHTML =response.forecast.forecastday[0].hour[15].cloud


    time17.innerHTML =response.forecast.forecastday[0].hour[16].time
    wind17.innerHTML =response.forecast.forecastday[0].hour[16].wind_mph
    dwind17.innerHTML =response.forecast.forecastday[0].hour[16].wind_dir
    humi17.innerHTML =response.forecast.forecastday[0].hour[16].humidity
    heatin17.innerHTML =response.forecast.forecastday[0].hour[16].heatindex_c
    tempe117.innerHTML =response.forecast.forecastday[0].hour[16].temp_c
    press17.innerHTML =response.forecast.forecastday[0].hour[16].pressure_mb
    cloud17.innerHTML =response.forecast.forecastday[0].hour[16].cloud


    time18.innerHTML =response.forecast.forecastday[0].hour[17].time
    wind18.innerHTML =response.forecast.forecastday[0].hour[17].wind_mph
    dwind18.innerHTML =response.forecast.forecastday[0].hour[17].wind_dir
    humi18.innerHTML =response.forecast.forecastday[0].hour[17].humidity
    heatin18.innerHTML =response.forecast.forecastday[0].hour[17].heatindex_c
    tempe118.innerHTML =response.forecast.forecastday[0].hour[17].temp_c
    press18.innerHTML =response.forecast.forecastday[0].hour[17].pressure_mb
    cloud18.innerHTML =response.forecast.forecastday[0].hour[17].cloud


    time19.innerHTML =response.forecast.forecastday[0].hour[18].time
    wind19.innerHTML =response.forecast.forecastday[0].hour[18].wind_mph
    dwind19.innerHTML =response.forecast.forecastday[0].hour[18].wind_dir
    humi19.innerHTML =response.forecast.forecastday[0].hour[18].humidity
    heatin19.innerHTML =response.forecast.forecastday[0].hour[18].heatindex_c
    tempe119.innerHTML =response.forecast.forecastday[0].hour[18].temp_c
    press19.innerHTML =response.forecast.forecastday[0].hour[18].pressure_mb
    cloud19.innerHTML =response.forecast.forecastday[0].hour[18].cloud


    time20.innerHTML =response.forecast.forecastday[0].hour[19].time
    wind20.innerHTML =response.forecast.forecastday[0].hour[19].wind_mph
    dwind20.innerHTML =response.forecast.forecastday[0].hour[19].wind_dir
    humi20.innerHTML =response.forecast.forecastday[0].hour[19].humidity
    heatin20.innerHTML =response.forecast.forecastday[0].hour[19].heatindex_c
    tempe120.innerHTML =response.forecast.forecastday[0].hour[19].temp_c
    press20.innerHTML =response.forecast.forecastday[0].hour[19].pressure_mb
    cloud20.innerHTML =response.forecast.forecastday[0].hour[19].cloud


    time21.innerHTML =response.forecast.forecastday[0].hour[20].time
    wind21.innerHTML =response.forecast.forecastday[0].hour[20].wind_mph
    dwind21.innerHTML =response.forecast.forecastday[0].hour[20].wind_dir
    humi21.innerHTML =response.forecast.forecastday[0].hour[20].humidity
    heatin21.innerHTML =response.forecast.forecastday[0].hour[20].heatindex_c
    tempe121.innerHTML =response.forecast.forecastday[0].hour[20].temp_c
    press21.innerHTML =response.forecast.forecastday[0].hour[20].pressure_mb
    cloud21.innerHTML =response.forecast.forecastday[0].hour[20].cloud


    time22.innerHTML =response.forecast.forecastday[0].hour[21].time
    wind22.innerHTML =response.forecast.forecastday[0].hour[21].wind_mph
    dwind22.innerHTML =response.forecast.forecastday[0].hour[21].wind_dir
    humi22.innerHTML =response.forecast.forecastday[0].hour[21].humidity
    heatin22.innerHTML =response.forecast.forecastday[0].hour[21].heatindex_c
    tempe122.innerHTML =response.forecast.forecastday[0].hour[21].temp_c
    press22.innerHTML =response.forecast.forecastday[0].hour[21].pressure_mb
    cloud22.innerHTML =response.forecast.forecastday[0].hour[21].cloud


    time23.innerHTML =response.forecast.forecastday[0].hour[22].time
    wind23.innerHTML =response.forecast.forecastday[0].hour[22].wind_mph
    dwind23.innerHTML =response.forecast.forecastday[0].hour[22].wind_dir
    humi23.innerHTML =response.forecast.forecastday[0].hour[22].humidity
    heatin23.innerHTML =response.forecast.forecastday[0].hour[22].heatindex_c
    tempe123.innerHTML =response.forecast.forecastday[0].hour[22].temp_c
    press23.innerHTML =response.forecast.forecastday[0].hour[22].pressure_mb
    cloud23.innerHTML =response.forecast.forecastday[0].hour[22].cloud


    time24.innerHTML =response.forecast.forecastday[0].hour[23].time
    wind24.innerHTML =response.forecast.forecastday[0].hour[23].wind_mph
    dwind24.innerHTML =response.forecast.forecastday[0].hour[23].wind_dir
    humi24.innerHTML =response.forecast.forecastday[0].hour[23].humidity
    heatin24.innerHTML =response.forecast.forecastday[0].hour[23].heatindex_c
    tempe124.innerHTML =response.forecast.forecastday[0].hour[23].temp_c
    press24.innerHTML =response.forecast.forecastday[0].hour[23].pressure_mb
    cloud24.innerHTML =response.forecast.forecastday[0].hour[23].cloud




})
.catch(err => console.error(err));
	