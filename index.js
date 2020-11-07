   var button = document.querySelector(".button")
   var inputValue = document.querySelector(".search")
   var name = document.querySelector("#name")
   var temperature = document.querySelector("#temperature")

   button.addEventListener("click", function() {
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=" + inputValue.value + "&appid=7ba1a8ed6aa9b2ea7fea936ad435e615",
        method: "GET"
    }).then(function (response) {
        console.log(response);

        
        // uvIndex

        $(".result-card").add("<div></div>")
        var uvIndex = $("<p></p>").addClass("uvIndex").text("UV Index: " + response.coord.lat)

        $(".result-card").prepend(uvIndex)
    

         // wind speed
         $(".result-card").add("<div></div>")
         var windSpeed = $("<p></p>").text("WindSpeed: " +response.wind.speed + " " + "MPH")
 
         $(".result-card").prepend(windSpeed)

        // humidity

        var humidityDiv = $("<div></div>")

        var getHumidity = response.main.humidity;

        var answerr = $("<p>").text("Humidity: " + getHumidity)
        $(".result-card").prepend(answerr)
        
        // Name
        var nameDiv = $("<div></div>").addClass("nameDiv")
        // $(".result-card").add("<div></div>").addClass("nameDiv")

        var getName = response.name;
    
        var poppy = $("<p>").addClass("nameDiv").text("Name: " + getName)
        $(".result-card").prepend(poppy);

    });
   })

   