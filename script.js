const apiKey = 122334454;//enter your Api KEY 
const apiUrl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const backgroundVideo = document.getElementById("background-video");

async function checkWeather(city){
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

	if(response.status == 404){
		document.querySelector(".error").style.display ="block";
		//document.querySelector(".weather").style.display ="none";
	}else{
		var data = await response.json();

//console.log(data);
document.querySelector(".city").innerHTML = data.name;
document.querySelector(".temp").innerHTML = Math.round(data.main.temp)  + "°c";
document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

//updating weather icons 
if (data.weather[0].main == "Clouds"){
	weatherIcon.src="images/clouds.png";
	backgroundVisssdeo.src= "videos/cloudss.mp4";
}else if(data.weather[0].main == "Clear"){
	weatherIcon.src="images/clear.png";
	backgroundVideo.src= "videos/clearr.mp4";
}else if(data.weather[0].main == "Rain"){
	weatherIcon.src="images/rain.png";
	backgroundVideo.src= "videos/rainn.mp4";
}else if(data.weather[0].main == "Drizzle"){
	weatherIcon.src="images/drizzle.png";
	backgroundVideo.src= "videos/drizzleee.mp4";
}else if(data.weather[0].main == "Mist"){
	weatherIcon.src="images/mist.png";
	backgroundVideo.src= "videos/mistt.mp4";
}else if (data.weather[0].main == "Snow"){
	weatherIcon.src="images/snow.png";
	backgroundVideo.src= "videos/snoww.mp4";
}

document.querySelector(".weather").style.display="block";
//document.querySelector(".error").style.display ="block";
	}


}

searchBtn.addEventListener("click", ()=>{
	checkWeather(searchBox.value);
})