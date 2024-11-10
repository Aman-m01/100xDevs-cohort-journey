import { useState } from 'react'
import './App.css'

/*
> Dynamic websites > when you have to create a dynamic websites, you write a lot of js code that does DOM manipulations 
*/

function App() {
  const [count, setCount] = useState(0)

  return (
 
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
     
  )
}

export default App
 