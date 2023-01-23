import { useState } from "react";
import Locationdata from './fetchdata'

let Search=()=>{
    const [input,setInput]=useState("Delhi");
    const [count,setCount]=useState(0);

  function handleChange(e){
    let location=e.target.value;
    setInput(location)
  }

  function render(){
    
   setCount(prevCount=>prevCount+1)
 
  }

    return (
       <div className="searchbar-parent esm:mt-28">
       <div className="searchbar-body flex flex-col"><div className="search-bar flex  esm:w-80v md:w-50v ">
          <input type="text" className="border-2 border-r-0 border-black w-full  rounded-t-md rounded-r-none outline-none" onChange={handleChange} value={input}></input>
        <button onClick={render} className="border-2 border-black rounded-r-md rounded-b-none  esm:bg-red-500 md:bg-red-600 ">
          <svg width="40px" height="40px" className="p-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M22 22L20 20" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          </button></div>
         <Locationdata locationName={input} render={count}/></div>
        </div>
    )
 }

 export default Search;





