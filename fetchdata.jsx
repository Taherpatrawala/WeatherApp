import { useState,useEffect } from "react";
import Body from "./body";
import Cards from "./cards";

function LocationData(props){ 

let [data,setData]=useState({});
let [weather,setWeather]=useState("");
let [forecast,setForecast]=useState("");

useEffect( ()=>{ 
async function fetchData(){ 
try{ 
let promise=await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${props.locationName}&limit=1&appid=1e22efc1713465b022e4b2248979c3a4`)
let daata= await promise.json();
setData(daata);


}
catch{
console.log("There was an error while finding the coordinates");
}
}
fetchData();

},[props.render])

useEffect( ()=>{ 
if(data[0] && data[0].lat &&data[0].lon){ 
try{ 
let weatherAPI= async ()=>{
    let promise= await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=1e22efc1713465b022e4b2248979c3a4&units=metric`)
    let promiseData=await promise.json();
    setWeather(promiseData);
} 
weatherAPI();}
catch{
    console.log("There was an error concerning weather report")
}
}
},[data])

useEffect(
 ()=>{ 
    if(data[0] && data[0].lat &&data[0].lon){
   try{  async function forcaster(){
    let thirdPromise=await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data[0].lat}&lon=${data[0].lon}&appid=1e22efc1713465b022e4b2248979c3a4&units=metric`);
    let daaata=await thirdPromise.json();
    setForecast(daaata);
   }
   forcaster()}
   catch{
    console.log('Forecast API is not working')
   }
}
 }
    ,[data]
)


return (
    <div className="">
      
    {weather.main && 
    <Body 
    temp={weather.main.temp} 
    name={weather.name}
    countryName={weather.sys.country}  
    description={weather.weather[0].description}
    clouds={weather.clouds.all}
    humidity={weather.main.humidity}
    wind={weather.wind.speed}
    mainDescription={weather.weather[0].main}/>
 }
<div className="flex justify-between items-center esm:gap-4 lg:gap-0 esm:flex-col md:flex-row mt-8">
{
    data[0] && forecast && <Cards when={forecast.list[8].dt_txt} ftemp={forecast.list[8].main.temp} fdescription={forecast.list[8].weather[0].description}  fMainDescription={forecast.list[8].weather[0].main}/>
      
}
{
    data[0] && forecast && <Cards when={forecast.list[16].dt_txt} ftemp={forecast.list[16].main.temp} fdescription={forecast.list[16].weather[0].description} fMainDescription={forecast.list[16].weather[0].main}/>
      
}
{
    data[0] && forecast && <Cards when={forecast.list[24].dt_txt} ftemp={forecast.list[24].main.temp} fdescription={forecast.list[24].weather[0].description} fMainDescription={forecast.list[24].weather[0].main}/>
      
}
{
    data[0] && forecast && <Cards when={forecast.list[28].dt_txt} ftemp={forecast.list[28].main.temp} fdescription={forecast.list[28].weather[0].description} fMainDescription={forecast.list[28].weather[0].main}/>
      
}


</div>



  

    </div>
)



}
export default LocationData;