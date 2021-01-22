API_KEY = "c1a6995b0235211a1c2c5c865f05b384";

$(function(){
  $('#btn').on('click', function(){
$.ajax({
  url: "http://api.openweathermap.org/data/2.5/weather?q=" + $('#cityname').val() + "&units=metric&appid=" + API_KEY,
  dataType : 'jsonp',
    }).done(function(data){
      // 通信成功
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_max);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src","http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function(date){
      // 通信失敗
      alert('通信失敗');
    });
  });
});