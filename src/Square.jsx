function Square({value,onsquareClick}){
return (<button className='square' onClick={onsquareClick}>{value}</button>
);
}
export default Square;