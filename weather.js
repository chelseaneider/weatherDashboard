$(document).ready(function(){
    $("#submitWeather").click(function(){
        console.log("click");
         var city = $("#textcity").val();
         console.log("textcity: ", city)
         let url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + "&untis=metric" + "&appid=ccbfb8daf2a8d8b84a4a6870052f1a52";
           
         $.ajax({
             
               url: url,
               success: function(data){
                var fa = function(k){
                   let c = k - 273;
                   let f = 1.8 * c + 32;
                   total = Math.round(total);
                   return f 
                }
               $("#city")
                 .html(`<div>${data.name}</div>`)
               $("#date")
                 .html(`<div>${Date(data.dt)}</div>`)  
               $("#temperature")
                 .html(`<div>${fa(data.main.temp)}</div>`)  
               $("#skies")   
                 .html(`<div>${data.weather[0].description}</div>`)
               $("#hi-lo")
                  .html(`<div>${fa(data.main.temp_min)}f/${fa(data.main.temp_max)}f</div>`)               
                  console.log(data);

               }
   
           });
   
   });
});