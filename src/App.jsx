import { useState } from 'react'
import Board from './Board';
import './App.css'


export default function Game(){
  const [xIsNext,setXIsNext]=useState(true);
  const [history, sethistory]= useState([Array(9).fill(null)]);
  const currentsquares= history[history.length-1];

  function handlePlay(nextSquare){
sethistory([...history,nextSquare])
setXIsNext(!xIsNext)
  }
  function jumpTo(nextMove){
    
  }
  const moves = history.map((square,move)=>{
    let description;
    if(move>0){
      description='Go to move '+move
    }else{
description='Go to game start'
    }
    return( 
      
        <li>
          <button onClick={()=> jumpTo(move)}>  {description}</button>
        </li>
      
      
    )
  })
  return(
    <div className='game'>
      <div className='game-board'>
        <Board xIsNext={xIsNext} square={currentsquares} onPlay={handlePlay} />
        
      </div>
      <div className='game-info'>
        <ol>
{moves}
        </ol>
      </div>
    </div>
  )
}

function Combinations(square){
  const combo =[
    [0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]

  ];

  for(let i=0; i<combo.length;i++){
    const[a,b,c] = combo[i];
    if(square[a] && square[a]=== square[b] && square[a]=== square[c]){
      return square[a];
    }
  }
  return null;
}