import React from 'react'

const Box = (props) => {
 
let result;
if (
    props.title === "computer" &&
    props.result !== "무승부" &&
    props.result !== ""  ) {
        result = props.result === "win" ? "lose" : "win";
    }
    else {
            result = props.result;
    }


    

  return (
    <div className={`box ${result}`}>
        <h1>{props.title}</h1>
        <img className='item-img' src={props.item && props.item.img} 
        alt=''/>
      <h3>{result}<br/>
           {props.winCount}
        </h3>
       
    </div>
  )
}

export default Box