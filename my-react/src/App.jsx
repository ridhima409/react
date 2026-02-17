import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(0)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      <div className="bg-white rounded-lg shadow-2xl p-8 w-80">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Counter
        </h1>
        
        <div className="bg-gradient-to-r from-blue-400 to-purple-500 rounded-lg p-8 mb-8">
          <p className="text-6xl font-bold text-white text-center">
            {count}
          </p>
        </div>

        <div className="flex gap-4 mb-4">
          <button
            onClick={decrement}
            className="flex-1 bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            -
          </button>
          
          <button
            onClick={increment}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
          >
            +
          </button>
        </div>

        <button
          onClick={reset}
          className="w-full bg-gray-500 hover:bg-gray-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
        >
          Reset
        </button>
      </div>
    </div>
  )
}

export default App