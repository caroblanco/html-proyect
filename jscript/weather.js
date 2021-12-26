let weather ={
    apiKey: "1dcb494a3092ff86cfe03fdd928225f6",

    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=" + this.apiKey)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function(data){
        //ENTRE CORCHETES PONGO LO QUE QUIERO EXTRAER DEL JSON, DATA.(SECCION DEL JSON)
        //TRANSFORMA EN VARIABLES
        const {name} = data;
        const {icon, description} = data.weather[0]; //SON ARRAYS
        const {temp, humidity} = data.main;
        const {speed} = data.wind;
        console.log(name, icon,description,temp,humidity,speed);

        //COMO SE MUESTRA
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
        document.querySelector(".wind").innerText ="Wind speed: " + speed*3.6 + " km/h";
        document.querySelector(".quote").innerText ="Quote: " + this.getQuote(temp);
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },

    getQuote: function(temp){
        if(temp > 35)
            return "Mudate mejor";
        else if(temp>30)
            return "Que calor";
        else if(temp > 25)
            return "Ta hot";
        else if(temp > 20)
            return "Se pueden comer pastas";
        else if(temp >10)
            return "Ta chill";
        else if(temp > 0)
            return "Ta fresco pa chomba";
        else
            return "XD";
    }
};


//ESPERAN QUE PASE ALGO
document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
document.querySelector(".search-bar").addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
  
weather.fetchWeather("Buenos Aires");