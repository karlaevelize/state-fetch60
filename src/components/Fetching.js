import { useEffect, useState } from "react"
import axios from "axios"

//pokemon url: https://pokeapi.co/api/v2/pokemon
//random cat gif: https://cataas.com/cat/gif
//game of thrones: http://hp-api.herokuapp.com/api/characters/1
//list of quotes: https://api.quotable.io/random 

const Fetching = () => {

  const [ quotes, setQuotes ] = useState(null)
  const [ quote, setQuote ] = useState(null)
  
  const [ counter, setCounter] = useState(0)

  //1. Install and import axios
  //2. Write and async function
  //3. Console.log the response
  //4. Call the function inside useEffect
  //6. Check the console.log 
  //7. Import useState and declare a place to hold the response 
  //8. Set the state to the response

  const getQuotes = async () => {
    const response = await axios.get("https://api.quotable.io/quotes")
    // console.log("response", response)
    setQuotes(response.data.results)
  }

  const getQuote = async () => {
    const response = await axios.get("https://api.quotable.io/random")
    console.log("quote", response.data)
    setCat(response.data)
  }

  useEffect(() => {
    getQuotes()
    getQuote()
  }, []) //empty array -> runs once, no array -> runs infinite,  [data] -> runs whenever data changes

  // console.log(counter)
  // console.log("quotes", quotes)

  return (
    <div>
      <h2>Fetching Data</h2>  
      <button onClick={() => setCounter(counter + 1)}>Increment</button> {counter}
      {/* {!quotes ? "Loading" : quotes.map(quote => <p>{quote.content}</p>)} */}
      {quote ? <div>{quote.content}</div> : ""}
    </div>
  )
}

export default Fetching