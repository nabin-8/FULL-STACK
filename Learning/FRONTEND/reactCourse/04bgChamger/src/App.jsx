import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState('green')
  // function changeColor(color){
  //   setColor(color)
  // }


  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-lime-500 px-6 py-2 rounded-2xl">
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-blue-900' 
          // onClick={() =>changeColor('red')}
          onClick={() =>setColor('red')}>Test</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-white'
          onClick={() =>setColor('green')}>Test</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
