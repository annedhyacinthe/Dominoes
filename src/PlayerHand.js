import React from 'react';
import Dominoe from './Dominoe'
import DeckContext from './UserContext'


function Hand(prop){
  // const [comp4,setComp4] = React.useState([])
  const { deck, setDeck } = React.useContext(DeckContext)
  const hand = prop.hand
  const setHand = prop.setHand
  // console.log(setDeck)
  // console.log('reading')
    const makeDomino = (top,bottom) => {
      return <Dominoe top={top} bottom={bottom} />
    }

  const makeHands = () => {
    // random(a,b,c,d)
    const copyOfDeck = [...deck];
    const first7Cards = copyOfDeck.splice(0, 7)
    console.log('first 7 is ', first7Cards)
    console.log('copy of deck is', copyOfDeck)
    setDeck(copyOfDeck)
    console.log(deck)
    return first7Cards;
    //let copy = deck
    //let doms = copy.splice(0,7)
    //setDeck(copy)
    //console.log(doms)
    //return doms
   
  }

  const setHands = () =>{
    // console.log(setHand)
    // setHand.forEach(setFunction => {
      setDeck([1,2,3])
      setDeck([1,2,8])
      //setFunction(makeHands)
    // });
    // for(let i = 0; i < 4; i++){
    //   setHand[i](makeHands)
    // }
    // for(let i = 0; i < 4; i++){
    //   console.log(`this is player ${i}: ${hand[i]}`)
    // }
  }
  
    return(
      <div>
        <button onClick={setHands}>click me</button>
        {prop.hand.map((h, index) => (
          <li key={`hand-${index}`}>{`hand-${index}`}{hand}</li>
        ))}
      </div>
    )
}
export default Hand;

// const makeHands = () => {
//   // random(a,b,c,d)
//   let copy = deck
//   console.log(copy)
//   let doms = copy.splice(0,7)
//   setDeck(copy)
//   console.log(doms)
//   return doms
//   // console.log('hiya')
// }


// // console.log(deck)
// // random(comp4,setComp4,deck,setDeck)

// // console.log(deck)
//   return(
//     {setHand(makeHands)},
//     {setHand(makeHands)}
//     // <div>
//     //   <button onClick={()=>setHand(makeHands)}>click me</button>
//     // </div>
//   )
// }