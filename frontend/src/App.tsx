import DummyComponent from './components/test'
import GoogleAuthComponent from './components/GoogleAuthComponent'
import { useState } from 'react'

export default function App() {
  const [number,setNumber] = useState(0)
  return (
    <div>
      {/* <DummyComponent number={number} setNumber={setNumber}/> */}
      <GoogleAuthComponent/>
    </div>
  )
}

