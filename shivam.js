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



    timex1.innerHTML =response.forecast.forecastday[2].hour[0].time
    windx1.innerHTML =response.forecast.forecastday[2].hour[0].wind_mph
    dwindx1.innerHTML =response.forecast.forecastday[2].hour[0].wind_dir
    humix1.innerHTML =response.forecast.forecastday[2].hour[0].humidity
    heatinx1.innerHTML =response.forecast.forecastday[2].hour[0].heatindex_c
    tempex1.innerHTML =response.forecast.forecastday[2].hour[0].temp_c
    pressx1.innerHTML =response.forecast.forecastday[2].hour[0].pressure_mb
    cloudx1.innerHTML =response.forecast.forecastday[2].hour[0].cloud
    chancex1.innerHTML =response.forecast.forecastday[2].hour[0].chance_of_rain
    chanc11.innerHTML =response.forecast.forecastday[2].hour[0].will_it_rain









    timex2.innerHTML =response.forecast.forecastday[2].hour[1].time
    windx2.innerHTML =response.forecast.forecastday[2].hour[1].wind_mph
   dwindx2.innerHTML =response.forecast.forecastday[2].hour[1].wind_dir
    humix2.innerHTML =response.forecast.forecastday[2].hour[1].humidity
  heatinx2.innerHTML =response.forecast.forecastday[2].hour[1].heatindex_c
  tempex2.innerHTML =response.forecast.forecastday[2].hour[1].temp_c
   pressx2.innerHTML =response.forecast.forecastday[2].hour[1].pressure_mb
   cloudx2.innerHTML =response.forecast.forecastday[2].hour[1].cloud
   chancex2.innerHTML =response.forecast.forecastday[2].hour[1].chance_of_rain
    chanc22.innerHTML =response.forecast.forecastday[2].hour[1].will_it_rain


    timex3.innerHTML =response.forecast.forecastday[2].hour[2].time
    windx3.innerHTML =response.forecast.forecastday[2].hour[2].wind_mph
   dwindx3.innerHTML =response.forecast.forecastday[2].hour[2].wind_dir 
    humix3.innerHTML =response.forecast.forecastday[2].hour[2].humidity
  heatinx3.innerHTML =response.forecast.forecastday[2].hour[2].heatindex_c
  tempex3.innerHTML =response.forecast.forecastday[2].hour[2].temp_c
   pressx3.innerHTML =response.forecast.forecastday[2].hour[2].pressure_mb
   cloudx3.innerHTML =response.forecast.forecastday[2].hour[2].cloud
   chancex3.innerHTML =response.forecast.forecastday[2].hour[2].chance_of_rain
    chancex33.innerHTML =response.forecast.forecastday[2].hour[2].will_it_rain


    timex4.innerHTML =response.forecast.forecastday[2].hour[3].time
    windx4.innerHTML =response.forecast.forecastday[2].hour[3].wind_mph
   dwindx4.innerHTML =response.forecast.forecastday[2].hour[3].wind_dir
    humix4.innerHTML =response.forecast.forecastday[2].hour[3].humidity
  heatinx4.innerHTML =response.forecast.forecastday[2].hour[3].heatindex_c
  tempex4.innerHTML =response.forecast.forecastday[2].hour[3].temp_c
   pressx4.innerHTML =response.forecast.forecastday[2].hour[3].pressure_mb
   cloudx4.innerHTML =response.forecast.forecastday[2].hour[3].cloud
   chancex4.innerHTML =response.forecast.forecastday[2].hour[3].chance_of_rain
    chancex44.innerHTML =response.forecast.forecastday[2].hour[3].will_it_rain


    timex5.innerHTML =response.forecast.forecastday[2].hour[4].time
    windx5.innerHTML =response.forecast.forecastday[2].hour[4].wind_mph
   dwindx5.innerHTML =response.forecast.forecastday[2].hour[4].wind_dir
    humix5.innerHTML =response.forecast.forecastday[2].hour[4].humidity
  heatinx5.innerHTML =response.forecast.forecastday[2].hour[4].heatindex_c    
  tempex5.innerHTML =response.forecast.forecastday[2].hour[4].temp_c
   pressx5.innerHTML =response.forecast.forecastday[2].hour[4].pressure_mb
   cloudx5.innerHTML =response.forecast.forecastday[2].hour[4].cloud
   chancex5.innerHTML =response.forecast.forecastday[2].hour[4].chance_of_rain
    chancex55.innerHTML =response.forecast.forecastday[2].hour[4].will_it_rain


    timex6.innerHTML =response.forecast.forecastday[2].hour[5].time
    windx6.innerHTML =response.forecast.forecastday[2].hour[5].wind_mph
   dwindx6.innerHTML =response.forecast.forecastday[2].hour[5].wind_dir
    humix6.innerHTML =response.forecast.forecastday[2].hour[5].humidity
  heatinx6.innerHTML =response.forecast.forecastday[2].hour[5].heatindex_c    
  tempex6.innerHTML =response.forecast.forecastday[2].hour[5].temp_c
   pressx6.innerHTML =response.forecast.forecastday[2].hour[5].pressure_mb
   cloudx6.innerHTML =response.forecast.forecastday[2].hour[5].cloud
   chancex6.innerHTML =response.forecast.forecastday[2].hour[5].chance_of_rain
    chancex66.innerHTML =response.forecast.forecastday[2].hour[5].will_it_rain


    timex7.innerHTML =response.forecast.forecastday[2].hour[6].time
    windx7.innerHTML =response.forecast.forecastday[2].hour[6].wind_mph
   dwindx7.innerHTML =response.forecast.forecastday[2].hour[6].wind_dir
    humix7.innerHTML =response.forecast.forecastday[2].hour[6].humidity
  heatinx7.innerHTML =response.forecast.forecastday[2].hour[6].heatindex_c          
  tempex7.innerHTML =response.forecast.forecastday[2].hour[6].temp_c
   pressx7.innerHTML =response.forecast.forecastday[2].hour[6].pressure_mb
   cloudx7.innerHTML =response.forecast.forecastday[2].hour[6].cloud
   chancex7.innerHTML =response.forecast.forecastday[2].hour[6].chance_of_rain
    chancex77.innerHTML =response.forecast.forecastday[2].hour[6].will_it_rain


    timex8.innerHTML =response.forecast.forecastday[2].hour[7].time
    windx8.innerHTML =response.forecast.forecastday[2].hour[7].wind_mph
   dwindx8.innerHTML =response.forecast.forecastday[2].hour[7].wind_dir
    humix8.innerHTML =response.forecast.forecastday[2].hour[7].humidity
  heatinx8.innerHTML =response.forecast.forecastday[2].hour[7].heatindex_c
  tempex8.innerHTML =response.forecast.forecastday[2].hour[7].temp_c
   pressx8.innerHTML =response.forecast.forecastday[2].hour[7].pressure_mb
   cloudx8.innerHTML =response.forecast.forecastday[2].hour[7].cloud
   chancex8.innerHTML =response.forecast.forecastday[2].hour[7].chance_of_rain
    chancex88.innerHTML =response.forecast.forecastday[2].hour[7].will_it_rain


    timex9.innerHTML =response.forecast.forecastday[2].hour[8].time
    windx9.innerHTML =response.forecast.forecastday[2].hour[8].wind_mph
   dwindx9.innerHTML =response.forecast.forecastday[2].hour[8].wind_dir
    humix9.innerHTML =response.forecast.forecastday[2].hour[8].humidity     
  heatinx9.innerHTML =response.forecast.forecastday[2].hour[8].heatindex_c
  tempex9.innerHTML =response.forecast.forecastday[2].hour[8].temp_c
   pressx9.innerHTML =response.forecast.forecastday[2].hour[8].pressure_mb
   cloudx9.innerHTML =response.forecast.forecastday[2].hour[8].cloud
   chancex9.innerHTML =response.forecast.forecastday[2].hour[8].chance_of_rain
    chancex99.innerHTML =response.forecast.forecastday[2].hour[8].will_it_rain

    
    timex10.innerHTML =response.forecast.forecastday[2].hour[9].time
    windx10.innerHTML =response.forecast.forecastday[2].hour[9].wind_mph
   dwindx10.innerHTML =response.forecast.forecastday[2].hour[9].wind_dir
    humix10.innerHTML =response.forecast.forecastday[2].hour[9].humidity   
  heatinx10.innerHTML =response.forecast.forecastday[2].hour[9].heatindex_c
  tempex10.innerHTML =response.forecast.forecastday[2].hour[9].temp_c
   pressx10.innerHTML =response.forecast.forecastday[2].hour[9].pressure_mb
   cloudx10.innerHTML =response.forecast.forecastday[2].hour[9].cloud
   chancex10.innerHTML =response.forecast.forecastday[2].hour[9].chance_of_rain
    chancex110.innerHTML =response.forecast.forecastday[2].hour[9].will_it_rain


    timex11.innerHTML =response.forecast.forecastday[2].hour[10].time
    windx11.innerHTML =response.forecast.forecastday[2].hour[10].wind_mph
    dwindx11.innerHTML =response.forecast.forecastday[2].hour[10].wind_dir
    humix11.innerHTML =response.forecast.forecastday[2].hour[10].humidity
    heatinx11.innerHTML =response.forecast.forecastday[2].hour[10].heatindex_c
    tempex11.innerHTML =response.forecast.forecastday[2].hour[10].temp_c
    pressx11.innerHTML =response.forecast.forecastday[2].hour[10].pressure_mb
    cloudx11.innerHTML =response.forecast.forecastday[2].hour[10].cloud
    chancex11.innerHTML =response.forecast.forecastday[2].hour[10].chance_of_rain
    chancex111.innerHTML =response.forecast.forecastday[2].hour[10].will_it_rain


    timex12.innerHTML =response.forecast.forecastday[2].hour[11].time
    windx12.innerHTML =response.forecast.forecastday[2].hour[11].wind_mph
    dwindx12.innerHTML =response.forecast.forecastday[2].hour[11].wind_dir
    humix12.innerHTML =response.forecast.forecastday[2].hour[11].humidity
    heatinx12.innerHTML =response.forecast.forecastday[2].hour[11].heatindex_c
    tempex12.innerHTML =response.forecast.forecastday[2].hour[11].temp_c
    pressx12.innerHTML =response.forecast.forecastday[2].hour[11].pressure_mb
    cloudx12.innerHTML =response.forecast.forecastday[2].hour[11].cloud
    chancex12.innerHTML =response.forecast.forecastday[2].hour[11].chance_of_rain
    chancex112.innerHTML =response.forecast.forecastday[2].hour[11].will_it_rain


    timex13.innerHTML =response.forecast.forecastday[2].hour[12].time
    windx13.innerHTML =response.forecast.forecastday[2].hour[12].wind_mph
    dwindx13.innerHTML =response.forecast.forecastday[2].hour[12].wind_dir
    humix13.innerHTML =response.forecast.forecastday[2].hour[12].humidity
    heatinx13.innerHTML =response.forecast.forecastday[2].hour[12].heatindex_c
    tempex13.innerHTML =response.forecast.forecastday[2].hour[12].temp_c
    pressx13.innerHTML =response.forecast.forecastday[2].hour[12].pressure_mb
    cloudx13.innerHTML =response.forecast.forecastday[2].hour[12].cloud
    chancex13.innerHTML =response.forecast.forecastday[2].hour[12].chance_of_rain
    chancex113.innerHTML =response.forecast.forecastday[2].hour[12].will_it_rain


    timex14.innerHTML =response.forecast.forecastday[2].hour[13].time
    windx14.innerHTML =response.forecast.forecastday[2].hour[13].wind_mph
    dwindx14.innerHTML =response.forecast.forecastday[2].hour[13].wind_dir
    humix14.innerHTML =response.forecast.forecastday[2].hour[13].humidity
    heatinx14.innerHTML =response.forecast.forecastday[2].hour[13].heatindex_c
    tempex14.innerHTML =response.forecast.forecastday[2].hour[13].temp_c
    pressx14.innerHTML =response.forecast.forecastday[2].hour[13].pressure_mb
    cloudx14.innerHTML =response.forecast.forecastday[2].hour[13].cloud
    chancex14.innerHTML =response.forecast.forecastday[2].hour[13].chance_of_rain
    chancex114.innerHTML =response.forecast.forecastday[2].hour[13].will_it_rain


    timex15.innerHTML =response.forecast.forecastday[2].hour[14].time
    windx15.innerHTML =response.forecast.forecastday[2].hour[14].wind_mph
    dwindx15.innerHTML =response.forecast.forecastday[2].hour[14].wind_dir
    humix15.innerHTML =response.forecast.forecastday[2].hour[14].humidity
    heatinx15.innerHTML =response.forecast.forecastday[2].hour[14].heatindex_c
    tempex15.innerHTML =response.forecast.forecastday[2].hour[14].temp_c
    pressx15.innerHTML =response.forecast.forecastday[2].hour[14].pressure_mb
    cloudx15.innerHTML =response.forecast.forecastday[2].hour[14].cloud
    chancex15.innerHTML =response.forecast.forecastday[2].hour[14].chance_of_rain
    chancex115.innerHTML =response.forecast.forecastday[2].hour[14].will_it_rain


    timex16.innerHTML =response.forecast.forecastday[2].hour[15].time
    windx16.innerHTML =response.forecast.forecastday[2].hour[15].wind_mph
    dwindx16.innerHTML =response.forecast.forecastday[2].hour[15].wind_dir
    humix16.innerHTML =response.forecast.forecastday[2].hour[15].humidity
    heatinx16.innerHTML =response.forecast.forecastday[2].hour[15].heatindex_c
    tempex16.innerHTML =response.forecast.forecastday[2].hour[15].temp_c
    pressx16.innerHTML =response.forecast.forecastday[2].hour[15].pressure_mb
    cloudx16.innerHTML =response.forecast.forecastday[2].hour[15].cloud
    chancex16.innerHTML =response.forecast.forecastday[2].hour[15].chance_of_rain
    chancex116.innerHTML =response.forecast.forecastday[2].hour[15].will_it_rain


    timex17.innerHTML =response.forecast.forecastday[2].hour[16].time
    windx17.innerHTML =response.forecast.forecastday[2].hour[16].wind_mph
    dwindx17.innerHTML =response.forecast.forecastday[2].hour[16].wind_dir
    humix17.innerHTML =response.forecast.forecastday[2].hour[16].humidity
    heatinx17.innerHTML =response.forecast.forecastday[2].hour[16].heatindex_c
    tempex17.innerHTML =response.forecast.forecastday[2].hour[16].temp_c
    pressx17.innerHTML =response.forecast.forecastday[2].hour[16].pressure_mb
    cloudx17.innerHTML =response.forecast.forecastday[2].hour[16].cloud
    chancex17.innerHTML =response.forecast.forecastday[2].hour[16].chance_of_rain
    chancex117.innerHTML =response.forecast.forecastday[2].hour[16].will_it_rain


    timex18.innerHTML =response.forecast.forecastday[2].hour[17].time
    windx18.innerHTML =response.forecast.forecastday[2].hour[17].wind_mph
    dwindx18.innerHTML =response.forecast.forecastday[2].hour[17].wind_dir
    humix18.innerHTML =response.forecast.forecastday[2].hour[17].humidity
    heatinx18.innerHTML =response.forecast.forecastday[2].hour[17].heatindex_c
    tempex18.innerHTML =response.forecast.forecastday[2].hour[17].temp_c
    pressx18.innerHTML =response.forecast.forecastday[2].hour[17].pressure_mb
    cloudx18.innerHTML =response.forecast.forecastday[2].hour[17].cloud
    chancex18.innerHTML =response.forecast.forecastday[2].hour[17].chance_of_rain
    chancex118.innerHTML =response.forecast.forecastday[2].hour[17].will_it_rain


    timex19.innerHTML =response.forecast.forecastday[2].hour[18].time
    windx19.innerHTML =response.forecast.forecastday[2].hour[18].wind_mph
    dwindx19.innerHTML =response.forecast.forecastday[2].hour[18].wind_dir
    humix19.innerHTML =response.forecast.forecastday[2].hour[18].humidity
    heatinx19.innerHTML =response.forecast.forecastday[2].hour[18].heatindex_c
    tempex19.innerHTML =response.forecast.forecastday[2].hour[18].temp_c
    pressx19.innerHTML =response.forecast.forecastday[2].hour[18].pressure_mb
    cloudx19.innerHTML =response.forecast.forecastday[2].hour[18].cloud
    chancex19.innerHTML =response.forecast.forecastday[2].hour[18].chance_of_rain
    chancex119.innerHTML =response.forecast.forecastday[2].hour[18].will_it_rain


    timex20.innerHTML =response.forecast.forecastday[2].hour[19].time
    windx20.innerHTML =response.forecast.forecastday[2].hour[19].wind_mph
    dwindx20.innerHTML =response.forecast.forecastday[2].hour[19].wind_dir
    humix20.innerHTML =response.forecast.forecastday[2].hour[19].humidity
    heatinx20.innerHTML =response.forecast.forecastday[2].hour[19].heatindex_c
    tempex20.innerHTML =response.forecast.forecastday[2].hour[19].temp_c
    pressx20.innerHTML =response.forecast.forecastday[2].hour[19].pressure_mb
    cloudx20.innerHTML =response.forecast.forecastday[2].hour[19].cloud
    chancex20.innerHTML =response.forecast.forecastday[2].hour[19].chance_of_rain
    chancex200.innerHTML =response.forecast.forecastday[2].hour[19].will_it_rain


    timex21.innerHTML =response.forecast.forecastday[2].hour[20].time
    windx21.innerHTML =response.forecast.forecastday[2].hour[20].wind_mph
    dwindx21.innerHTML =response.forecast.forecastday[2].hour[20].wind_dir
    humix21.innerHTML =response.forecast.forecastday[2].hour[20].humidity
    heatinx21.innerHTML =response.forecast.forecastday[2].hour[20].heatindex_c
    tempex21.innerHTML =response.forecast.forecastday[2].hour[20].temp_c
    pressx21.innerHTML =response.forecast.forecastday[2].hour[20].pressure_mb
    cloudx21.innerHTML =response.forecast.forecastday[2].hour[20].cloud
    chancex21.innerHTML =response.forecast.forecastday[2].hour[20].chance_of_rain
    chancex210.innerHTML =response.forecast.forecastday[2].hour[20].will_it_rain


    timex22.innerHTML =response.forecast.forecastday[2].hour[21].time
    windx22.innerHTML =response.forecast.forecastday[2].hour[21].wind_mph
    dwindx22.innerHTML =response.forecast.forecastday[2].hour[21].wind_dir
    humix22.innerHTML =response.forecast.forecastday[2].hour[21].humidity
    heatinx22.innerHTML =response.forecast.forecastday[2].hour[21].heatindex_c
    tempex22.innerHTML =response.forecast.forecastday[2].hour[21].temp_c
    pressx22.innerHTML =response.forecast.forecastday[2].hour[21].pressure_mb
    cloudx22.innerHTML =response.forecast.forecastday[2].hour[21].cloud
    chancex22.innerHTML =response.forecast.forecastday[2].hour[21].chance_of_rain
    chancex220.innerHTML =response.forecast.forecastday[2].hour[21].will_it_rain


    timex23.innerHTML =response.forecast.forecastday[2].hour[22].time
    windx23.innerHTML =response.forecast.forecastday[2].hour[22].wind_mph
    dwindx23.innerHTML =response.forecast.forecastday[2].hour[22].wind_dir
    humix23.innerHTML =response.forecast.forecastday[2].hour[22].humidity
    heatinx23.innerHTML =response.forecast.forecastday[2].hour[22].heatindex_c
    tempex23.innerHTML =response.forecast.forecastday[2].hour[22].temp_c
    pressx23.innerHTML =response.forecast.forecastday[2].hour[22].pressure_mb
    cloudx23.innerHTML =response.forecast.forecastday[2].hour[22].cloud
    chancex23.innerHTML =response.forecast.forecastday[2].hour[22].chance_of_rain
    chancex230.innerHTML =response.forecast.forecastday[2].hour[22].will_it_rain


    timex24.innerHTML =response.forecast.forecastday[2].hour[23].time
    windx24.innerHTML =response.forecast.forecastday[2].hour[23].wind_mph
    dwindx24.innerHTML =response.forecast.forecastday[2].hour[23].wind_dir
    humix24.innerHTML =response.forecast.forecastday[2].hour[23].humidity
    heatinx24.innerHTML =response.forecast.forecastday[2].hour[23].heatindex_c
    tempex24.innerHTML =response.forecast.forecastday[2].hour[23].temp_c
    pressx24.innerHTML =response.forecast.forecastday[2].hour[23].pressure_mb
    cloudx24.innerHTML =response.forecast.forecastday[2].hour[23].cloud
    chancex24.innerHTML =response.forecast.forecastday[2].hour[23].chance_of_rain
    chancex240.innerHTML =response.forecast.forecastday[2].hour[23].will_it_rain




})
.catch(err => console.error(err));