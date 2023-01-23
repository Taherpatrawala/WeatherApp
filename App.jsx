import LocationData from './fetchdata'
import Search from './searchbar'

function App() {
  

  return (
    <div className="parent-div flex justify-center items-center min-h-screen min-w-max">
      <p className='absolute top-8 text-white esm:text-2xl md:text-4xl text-center'><span className='text-yellow-400'>~</span>Find Weather conditions anywhere with a 4 day <span className='font-bold'>Forecast</span>!<span className='text-yellow-400'>~</span></p>
<Search/>
    </div>
  )
}

export default App
