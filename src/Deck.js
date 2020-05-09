// import React from 'react';
// import Dominoe from './Dominoe'
// import DeckContext from './UserContext'


// function Deck(prop){
//     const [deck, setDeck] = React.useState([[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,2],[2,3],[2,4],[2,5],[2,6],[3,3],[3,4],[3,5],[3,6],[4,4],[4,5],[4,6],[5,5],[5,6],[6,6]])

//     // setDeck()
    
//     const makeDomino = (top,bottom) => {
//       return <Dominoe top={top} bottom={bottom} />
//     }

//     return(
//       <div>
//         {deck,setDeck}
//       </div>
//     )
// }
// export default Deck;

// import React from 'react';
// import Dominoe from './Dominoe'
// import DeckContext from './UserContext'


// function Hand(prop){
//   const { playerHand,setPlayerHand,comp1,setComp1,comp2,setComp2,comp3,setComp3 } = React.useContext(DeckContext)
//   const { deck,setDeck,random } = prop
//     console.log(deck)
//     const makeDomino = (top,bottom) => {
//       return <Dominoe top={top} bottom={bottom} />
//     }

//   const makeHand = (a,b,c,d) => {
//     random(a,b,c,d)
//   }
//     // return(
//     //   <div>
//     //     {makeHand(playerHand,setPlayerHand,deck,setDeck)}
//     //     {/* {makeHand(comp1,setComp1,deck,setDeck)}
//     //     {makeHand(comp2,setComp2,deck,setDeck)}
//     //     {makeHand(comp3,setComp3,deck,setDeck)} */}
//     //   </div>
//     // )
// }
// export default Hand;

// import React from 'react';
// import DeckContext from './UserContext';
// import Hand from './PlayerHand'
// const Game = () =>{
  
//   const [deck, setDeck] = React.useState([[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[2,2],[2,3],[2,4],[2,5],[2,6],[3,3],[3,4],[3,5],[3,6],[4,4],[4,5],[4,6],[5,5],[5,6],[6,6]])

//   const [playerHand,setPlayerHand] = React.useState([])
//   const [comp1,setComp1] = React.useState([])
//   const [comp2,setComp2] = React.useState([])
//   const [comp3,setComp3] = React.useState([])
  

//   const random = (state,setFunction,deck,setDeck) =>{
//     // const updatedDeck = Deck
//     const i = state.length
//     while(i < 9){
//       const updatedDeck = [deck]
//       let randomDomino = Math.floor(Math.random() * updatedDeck.length);
//       setFunction(() =>{state.push(updatedDeck(randomDomino))})
//       updatedDeck.splice(randomDomino,1)
//       setDeck(updatedDeck)
//     }
//   }



// const makeHands = (deck,setDeck,random) =>{
//   return(
//     <Hand deck={deck} setDeck={setDeck} random={random} />
//   )
// } 

//   return(
//     <DeckContext.Provider value={{
//       playerHand,setPlayerHand,comp1,setComp1,comp2,setComp2,comp3,setComp3
//     }}>
//       <div>
//         {makeHands(deck,setDeck,random)}
//       </div>
//     </DeckContext.Provider>
//   )
// }
// export default Game