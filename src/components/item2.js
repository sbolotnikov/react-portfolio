import React from 'react';

function Item2(props) {
  let height = window.innerHeight;
  let width = window.innerWidth;
  return (
      // <span style={{position:"absolute" ,left:`${props.n*4-5}vw`, top: `-20vh`,font:"", fontSize:'4vw', color: "red", zIndex:"400"}} >{props.charItem}</span>
      <span className='letterStyle' style={{left:`${props.n*6.5-Math.floor(40* Math.sqrt(width/height))}vw` }} >{props.charItem}</span>
  );
}
export default Item2;