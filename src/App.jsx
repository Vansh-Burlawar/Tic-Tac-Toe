import { useState } from 'react'

import './App.css'

function Square({value,onsquareClick}){
return <button className='square' onClick={onsquareClick}>{value}</button>
}

export default function Board(){
  const [xIsNext, setXIsNext] = useState(true);
  const[square ,setSquare] = useState(Array(9).fill(null));

  function handleClick(i){
    if(square[i] || Combinations(square)){
      return;
    }
    const nextSquare = square.slice();
    if(xIsNext){
      nextSquare[i]="X";
    }else{
      nextSquare[i]="O";
    }
    
    setSquare(nextSquare);
    setXIsNext(!xIsNext);
  }

  const winner = CalculateWinner(square);
  let status;
  if(winner){
    status = "Winner " + winner + "Player";
  }else{
     status = "Next Player" +( xIsNext ? 'X':'O');
  }
  return(
    <>
    <div className='board-row'>
  <Square value={square[0]} onsquareClick={() =>handleClick(0)} />
  <Square value={square[1]} onsquareClick={() =>handleClick(1)} />
  <Square value={square[2]} onsquareClick={() =>handleClick(2)} />
  </div>
  <div className='board-row'>
  <Square value={square[3]} onsquareClick={() =>handleClick(3)} />
  <Square value={square[4]} onsquareClick={() =>handleClick(4)} />
  <Square value={square[5]} onsquareClick={() =>handleClick(5)} />
  </div>
  <div className='board-row'>
  <Square value={square[6]} onsquareClick={() =>handleClick(6)} />
  <Square value={square[7]} onsquareClick={() =>handleClick(7)} />
  <Square value={square[8]} onsquareClick={() =>handleClick(8)} />
  </div>
  </>
  );
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