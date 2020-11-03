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

        var nameDiv = $("<div></div>")

        var getName = response.name;

        var poppy = $("<p>").text("Name: " + getName)
        $(".result-card").prepend(poppy);
        
    //     var nameValue = response.name;
    //     var temperatureValue = response.main.temperature;
    //     console.log(nameValue)

    //    var valueName = document.createElement("div")
    //    valueName.innerHTML = nameValue;
    //    document.getElementById("#name").appendChild(valueName)
    });
   })

   