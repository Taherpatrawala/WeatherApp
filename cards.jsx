import React from "react"

let Cards=(props)=>{
 
    let [cardSvg,setCardSvg]=React.useState({
        url:""
    })

    let gifANdAll={
        url:["/WeatherAPP Material/animated/day.svg","/WeatherAPP Material/animated/cloudy.svg","/WeatherAPP Material/animated/rainy-6.svg","/weather-icons-master/production/fill/all/haze.svg","/weather-icons-master/production/fill/all/mist.svg","/weather-icons-master/production/fill/all/fog.svg","/weather-icons-master/production/fill/all/snow.svg"],
       
      }

    React.useEffect(()=>{
        if(props.fdescription){
            if( props.fMainDescription==="Clear" ){
           setCardSvg(prevState=>({...prevState,url:gifANdAll.url[0]}))
            }else if(props.fMainDescription==="Rain"){
              setCardSvg({url:gifANdAll.url[2]})
            }else if(props.fMainDescription==="Clouds"){
              setCardSvg({url:gifANdAll.url[1]})
          }else if(props.fMainDescription==="Haze"){
            setCardSvg(prevState=>({...prevState,url:gifANdAll.url[3]}))
          }else if(props.fMainDescription==="Mist"){
            setCardSvg(prevState=>({...prevState,url:gifANdAll.url[4]}))
          }else if(props.fMainDescription==="Fog"){
            setCardSvg(prevState=>({...prevState,url:gifANdAll.url[5]}))
          }else if(props.fMainDescription==="Snow"){
            setCardSvg(prevState=>({...prevState,url:gifANdAll.url[6]}))
          }
          
 } },[props.fdescription])

    return (
        <div className="card-parent border-2 border-black rounded-md bg-white">
       <div className="min-h-30 md:w-20v lg:w-10v esm:w-60v esm:mb-6">
       <div className="flex flex-col justify-center items-center  object-contain">
        <img src={cardSvg.url} className="object-contain max-h-full  h-14 w-14 p-0"></img>
        <p>Temp:{props.ftemp}°C</p>
        <p>{props.fdescription}</p>
        <p className="text-center">{props.when}</p></div>
       </div>
        </div>

    )
}

export default Cards;