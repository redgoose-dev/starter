import { useState } from 'react'

function App()
{
  const [ count, setCount ] = useState(0)

  function updateCount(count: number): number
  {
    return count + 1;
  }

  return (
    <article>
      <h1>App component</h1>
      <p>count is {count}</p>
      <button type="button" onClick={() => setCount(updateCount)}>
        update count
      </button>
    </article>
  )
}

export default App
