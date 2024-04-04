import { useState } from 'react'
import './App.css'

function App() {


  return (
    <>
    <div className="App">
      <div className='searchSection'>
        <h1>Search For A Game</h1>
        <input type='text' placeholder='Search for a game...'/>
        <button>Search Game Title</button>
      </div>
      
      <div className='dealsSection'>
        <h1>Latest Deals</h1>
      </div>
    </div>
    </>
  )
}

export default App
