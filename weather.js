$(document).ready(function(){
    $("#submitWeather").click(function(){
       var city = $("city").val();
       if(city != ''){
   
           $.ajax({
             
               url:'https://api.openweatermap.org/data/2.5/weather?q=' + city + "&untis=metric" +
               "&APPID=ccbfb8daf2a8d8b84a4a6870052f1a52";
               type:"GET",
               dataType:"jsonp"
               success: function(data){
                  console.log(data);

               }
   
           });
   
       }else {
           $("#error").html('Field cannot be empty');
       }
   });
});


   