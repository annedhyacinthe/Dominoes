import React, { useEffect } from 'react';
import DeckContext from './UserContext';
import Hand from './PlayerHand'
const Game = () =>{
  
  const [deck, setDeck] = React.useState([[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,2],[2,3],[2,4],[2,5],[2,6],[3,3],[3,4],[3,5],[3,6],[4,4],[4,5],[4,6],[5,5],[5,6],[6,6]])

  const [playerHand,setPlayerHand] = React.useState([])
  const [comp1,setComp1] = React.useState([])
  const [comp2,setComp2] = React.useState([])
  const [comp3,setComp3] = React.useState([])
  
  useEffect(() => {
    console.log(deck)
  }, [deck])

  const random = (state,setFunction,deck,setDeck) =>{
    // const updatedDeck = Deck
    const i = state.length
    while(i < 9){
      const updatedDeck = [deck]
      let randomDomino = Math.floor(Math.random() * updatedDeck.length);
      setFunction(() =>{state.push(updatedDeck(randomDomino))})
      updatedDeck.splice(randomDomino,1)
      setDeck(updatedDeck)
    }
  }

  return(
    <DeckContext.Provider value={{
      deck, setDeck
    }}>
      <div>
        <Hand hand={[playerHand,comp1,comp2,comp3]} setHand={[setPlayerHand,setComp1,setComp2,setComp3]} />
      </div>
    </DeckContext.Provider>
  )
}
export default Game