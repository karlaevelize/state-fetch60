import { useEffect, useState } from "react"
import axios from "axios"

//pokemon url: https://pokeapi.co/api/v2/pokemon
//random cat gif: https://cataas.com/cat/gif
//game of thrones: http://hp-api.herokuapp.com/api/characters/1
//list of quotes: https://api.quotable.io/random 

const Fetching = () => {

  const [ quotes, setQuotes ] = useState(null)
  const [ cat, setCat ] = useState(null)
  
  const [ counter, setCounter] = useState(0)

  const getQuotes = async () => {
    const response = await axios.get("https://api.quotable.io/quotes")
    // console.log("response", response)
    setQuotes(response.data.results)
  }

  const getPokemon = async () => {
    const response = await axios.get("https://api.quotable.io/random")
    console.log("quote", response.data)
    setCat(response.data)
  }

  useEffect(() => {
    getQuotes()
    getPokemon()
  }, [counter])

  // console.log(counter)
  // console.log("quotes", quotes)

  return (
    <div>
      <h2>Fetching Data</h2>  
      <button onClick={() => setCounter(counter + 1)}>Increment</button> {counter}
      {/* {!quotes ? "Loading" : quotes.map(quote => <p>{quote.content}</p>)} */}
      {cat ? <div>{cat.content}</div> : ""}
    </div>
  )
}

export default Fetching