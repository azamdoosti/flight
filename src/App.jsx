import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from '../Components/NavBar'
import Slider from '../Components/Slider'



const App=()=> { //arrow function
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#ced3d7] '>
      <NavBar></NavBar>
      <Slider></Slider>
      
    </div>


  )
}

export default App
