import { useState,useEffect } from "react";

function Body(props){ 

let [bodyInfo,setBodyInfo]=useState({
  url:"",
  text:"",
  bgImage:""
});

let gifANdAll={
  url:["/WeatherAPP Material/animated/day.svg","/WeatherAPP Material/animated/cloudy.svg","/WeatherAPP Material/animated/rainy-6.svg","/weather-icons-master/production/fill/all/haze.svg","/weather-icons-master/production/fill/all/mist.svg","/weather-icons-master/production/fill/all/fog.svg","/weather-icons-master/production/fill/all/snow.svg","/weather-icons-master/production/fill/all/smoke.svg"],
  text:['Awesome weather, go out and enjoy your day!',"The weather is chilly don't forget your Jacket!","Nice calm weather, enjoy your day with a cup of Tea!","Foggy weather out there,be carefull while drivng!","Enjoy your snowy Day!","Don't forget your Umbrella!"],
}

useEffect(
()=>{if(props.description){
  if( props.mainDescription==="Clear" ){
 setBodyInfo(prevState=>({...prevState,text:props.temp>8?[gifANdAll.text[0]]:[gifANdAll.text[1]],url:gifANdAll.url[0]}))
  }else if(props.description==="light rain" || props.mainDescription==="Rain"){
    setBodyInfo({url:gifANdAll.url[2],text:gifANdAll.text[5]})
  }else if(props.mainDescription==="Clouds" && props.temp<8){
    setBodyInfo(prevState=>({...prevState,url:gifANdAll.url[1],text:gifANdAll.text[1]}))
    
  }else if(props.mainDescription==="Clouds"){
    setBodyInfo({url:gifANdAll.url[1]})
}else if(props.mainDescription==="Haze"){
  setBodyInfo(prevState=>({...prevState,url:gifANdAll.url[3],text:gifANdAll.text[2]}))
}else if(props.mainDescription==="Mist"){
  setBodyInfo(prevState=>({...prevState,url:gifANdAll.url[4],text:gifANdAll.text[2]}))
}else if(props.mainDescription==="Fog"){
  setBodyInfo(prevState=>({...prevState,url:gifANdAll.url[5],text:gifANdAll.text[3]}))
}else if(props.mainDescription==="Snow"){
  setBodyInfo(prevState=>({...prevState,url:gifANdAll.url[6],text:gifANdAll.text[4]}))
}else if(props.mainDescription==="Smoke"){
  setBodyInfo(prevState=>({...prevState,url:gifANdAll.url[7],text:props.temp>8?[gifANdAll.text[2]]:[gifANdAll.text[1]]}))
  
}


}},[props.description])

let time=new Date()
let currentTime=time.toLocaleString()

return(
    <div className="body-parent border-2 border-t-0 border-black rounded-b-md  flex esm:flex-col md:flex-row justify-evenly items-center esm:w-80v md:w-50v text-white bg-dark">
      <div className="main-info"> 
       <div className="flex  items-center">
        <p className="location-name text-4xl text-red-600 ">{props.name},{props.countryName}</p>
        <div className="relative"><img src={bodyInfo.url} className=" h-20 w-20 p-0"></img></div>
        </div>
        <p className="temperature text-3xl">Temperature: {props.temp}°C</p>
        <p className="description text-2xl">{props.description}</p>
        <p>{bodyInfo.text}</p>
      </div>
      <div className="sub-info">
       <ul>
        <li><span className='text-yellow-400  text-xl font-semi-bold'>-</span>Wind:{props.wind}km/hr</li>
        <li><span className='text-yellow-400 text-xl font-semi-bold'>-</span>Humidity:{props.humidity}%</li>
        <li><span className='text-yellow-400 text-xl font-semi-bold'>-</span>clouds:{props.clouds}</li>
        <li>{currentTime}</li>
       </ul>
      </div>  
    </div>
)
}

export default Body;