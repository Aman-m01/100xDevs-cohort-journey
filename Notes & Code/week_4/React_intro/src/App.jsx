import { useState } from 'react'
import './App.css'

/*
> Dynamic websites > when you have to create a dynamic websites, you write a lot of js code that does DOM manipulations 
*/

function App() {
  const [count, setCount] = useState(0)

  return (
 <>
 <h2>Counter App</h2>
 <h3>Count {count}</h3>
 <button onClick={()=>{setCount(count + 1)}}>Increase</button>
 <button onClick={()=>{setCount(count - 1)}}>Decrease</button>
 <button onClick={()=>{setCount(0)}}>Reset</button>
 
 
 </>
     
  )
}

export default App
 