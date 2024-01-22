import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setColor] = useState('green')
  // function changeColor(color){
  //   setColor(color)
  // }
  let colorpick;

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="fixed flex flex-wrap justify-center gap-3 shadow-lg bg-lime-500 px-6 py-2 rounded-2xl">
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-red-900 text-white' 
          // onClick={() =>changeColor('red')}
          onClick={() =>setColor('red')}>Red</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-white'
          onClick={() =>setColor('white')}>white</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-green-900 text-white'
          onClick={() =>setColor('green')}>Green</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-pink-500 text-white'
          onClick={() =>setColor('pink')}>pink</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-black text-white'
          onClick={() =>setColor('black')}>Black</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-orange-500 text-white'
          onClick={() =>setColor('orange')}>orange</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-yellow-500'
          onClick={() =>setColor('yellow')}>yellow</button>
          <button className='outline-none px-4 py-1 rounded-full shadow-lg bg-purple-500 text-white'
          onClick={() =>setColor('purple')}>purple</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
