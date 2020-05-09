import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserContext from './UserContext';

function Dominoe(){
  const makeHalf=(number,type)=>{
    switch (number){
      case 0:
        return(
          <div class={type}>
            <div class='zero'></div>
          </div>
        )
      case 1:
        return(
          <div class={type}>
            <div class='five'></div>
          </div>
        )
      case 2:
        return(
          <div class={type}> 
            <div class='three'></div>
            <div class='seven'></div>
          </div>
        )
      case 3: 
        return(
          <div class={type}>   
            <div class='three'></div>
            <div class='five'></div>
            <div class='seven'></div>
          </div>  
        )
      case 4:
        return(
          <div class={type}> 
              <div class='one'></div>
              <div class='nine'></div>
              <div class='three'></div>
              <div class='seven'></div>
          </div>
        )
      case 5: 
        return(
          <div class={type}> 
              <div class='one'></div>
              <div class='nine'></div>
              <div class='three'></div>
              <div class='five'></div>
              <div class='seven'></div>
              
          </div>
    )
  // type like 'box top'
  case 6:
    return(
      <div class={type}> 
          <div class='one'></div>
          <div class='nine'></div>
          <div class='three'></div>
          <div class='seven'></div>
          <div class='four'></div>
          <div class='six'></div>
      </div>
    )
  }
}



const makeFull = (top,bottom) =>{
  return(<div class="column is-1">
       {makeHalf(top,'box top')}
       {makeHalf(bottom,'box')}
      </div> 
  )}
  return(
    <div class='columns is-mobile'>
      {/* makeFull(2,6) */}
      {makeFull(2,1)}
      {makeFull(5,6)}
    </div>
      //  <UserContext.Provider value={{
      //    makeFull:makeFull
      //  }}>
      //   <p>Click To Start</p>
      //   <button>Click</button>
      //  </UserContext.Provider>
     
  )
}

export default Dominoe;
