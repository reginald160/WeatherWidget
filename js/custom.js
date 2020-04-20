$(document).ready(function(){

  fetch("https://api.openweathermap.org/data/2.5/weather?q=Lagos&appid=e8184336f770b2705e0c80773866c44f&lang=en&units=metrics")
  .then(resp => resp.json())
  .then(data => {
    console.log(data);
    LagosUpdate(data);

  });
     
  function LagosUpdate(data) {
     let city= data.name;
     let convertToCelcuis = (((data.main.temp)-32)*(5/9))*0.205;
    let temp= Math.round(convertToCelcuis);
    let description= data.weather[0].description;
    let icon=data.weather[0].icon;
    
    let WindSpeed = data.wind.speed;
    let Latitude  = data.coord.lat;
     let longitude = data.coord.lon;      

    $('#city').html(city);
    $('#temp').html(temp);
      $('#description').html(description);
    $('#icon').html(icon);
    
    $('#speed').html(WindSpeed);
    $('#lat').html(Latitude);
    $('#lon').html(longitude);
    
    
    }
    
       
  });



