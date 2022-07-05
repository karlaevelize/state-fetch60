import { useState } from "react"

const State = () => {

  const [ amount, setAmount ] = useState(0)
  //amount = getter
  //setAmount = setter (function)
  //what we pass to useState = initial value

  const [ like, setLiked ] = useState(false)

  console.log("amount", amount)

  const toggleLike = () => {
    setLiked(!like)

    // if(like === true){
    //   setLiked(false)
    // } else {
    //   setLiked(true)
    // }
  }

  return (
    <div>
      {amount}{" "}
      <button onClick={() => setAmount(amount + 1)}>Increment</button>
      <button onClick={() => setAmount(amount - 1)}>Decrement</button>
      <br/>
      <button onClick={toggleLike}>{like ? "Dislike" : "Like"}</button>
    </div>
  )
}

export default State
