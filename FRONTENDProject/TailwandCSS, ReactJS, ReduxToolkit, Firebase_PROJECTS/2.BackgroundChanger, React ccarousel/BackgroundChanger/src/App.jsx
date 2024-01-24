import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("lightblue") 
  return (
   <>

    <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="shadow-lg border-r-4 border-indigo-500 px-6 py-2 rounded-2xl w-[130px] ml-4 h-[420px]">
        
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-red-900 text-white' 
        onClick={() =>setColor('red')}>Red</button>
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-green-900 text-white'
        onClick={() =>setColor('green')}>Green</button>
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-blue-500 text-white'
        onClick={() =>setColor('#0235F3')}>Blue</button>
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-black text-white'
        onClick={() =>setColor('black')}>Black</button>
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-pink-500 text-white'
        onClick={() =>setColor('pink')}>Pink</button>
         <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-purple-500 text-white'
        onClick={() =>setColor('purple')}>Purple</button>
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-orange-500 text-white'
        onClick={() =>setColor('orange')}>Orange</button>
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500'
        onClick={() =>setColor('yellow')}>Yellow</button>
        <button className=' mt-2 outline-none px-4 py-1 rounded-full shadow-lg bg-white'
        onClick={() =>setColor('white')}>White</button>
      </div>
    </div>

  </>
  )
}

export default App
