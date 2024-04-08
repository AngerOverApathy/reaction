import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [gameTitle, setGameTitle] = useState('')
  const [searchedGames, setSearchedGames] = useState([])
  const [gameDeals, setGameDeals] = useState([])

  const searchGame = () => {
    fetch(`https://www.cheapshark.com/api/1.0/games?title=${gameTitle}&limit=3`)
    .then(response => response.json())
    .then(data => {
      setSearchedGames(data)
    })
  }

  useEffect(() => {
    fetch(`https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=20&pageSize=3`)
    .then(response => response.json())
    .then(data => {
      setGameDeals(data)
      console.log(data)
    })
  }, [])

  return (
    <>
    <div className="App">
      <div className='searchSection'>
        <h1>Search For A Game</h1>
        <input type='text' placeholder='Search for a game...' onChange={(event)=> {
          setGameTitle(event.target.value)
        }}/>
        <button onClick={searchGame}>Search Game Title</button>

        <div className='searchedGames'>
          {searchedGames.map((game, key) => {
            return (
              <div className='game' key={key}> 
                {game.external}
                <img src={game.thumb} />
                {game.cheapest}
              </div>
            )
          })}
        </div>
      </div>
      
      <div className='dealsSection'>
        <h1>Latest Deals</h1>
        <div className='searchedGames'>
          {gameDeals.map((game, key) => {
            return (
              <div className='game' id='deals' key={key}>
                {game.title}
              </div>
            )
          })}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
