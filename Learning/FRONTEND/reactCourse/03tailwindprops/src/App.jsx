import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './componnents/card'
import './App.css'

function App() {
  // console.log(props);
  const [count, setCount] = useState(0)

  return (
    <>
       <h1 className="text-red-500 text-3xl font-bold underline">
      Hello world!
    </h1>
    <Card username="Nabin" />
    <Card username="React" post="Staff Engineer, Algolia" />
    <Card />
    <Card />
    </>
  )
}

export default App
