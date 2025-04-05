import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    userName: 'Tanuj',
    arr : [1,2,3]
  }

  return (
    <>
      <h1 className='bg-amber-400 text-black p-4 rounded-xl'>TailWind CSS</h1>

      <Card  userName="Tanuj" btnText="Click me!"/>
      <Card userName="Pokhriyal" btntext/>
    </>
  )
}

export default App
