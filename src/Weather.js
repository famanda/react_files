import React from "react";
import axios from 'axios';
import Loader from 'react-loader-spinner';

export default function Weather(props) {
    
function handleResponse(response) {
    alert(`The Weather in ${response.data.name} is ${response.data.main.temp}°C`);
}

let apiKey = `f2cfad915dcee273a86b45e874d64e09`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(handleResponse);
return (
<Loader
         type="Puff"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />
      );
}