import React, { useReducer, useState } from 'react';

const initialstate = 0


const reducer = (state , action)=>{
    console.log(state , action);
    switch(action.type){
        case "increment" : return state + 1;
        case "decrement" : return state - 1;
        case "multi" : return state * 5;
        default : return state
    }

}
const Usereducer = () => {
    // const [count , setCount] = useState(0)

    // const increment = () =>{
    //     setCount (count + 1)
    // }

    // const decrement = () =>{
    //     setCount (count - 1)
    // }

  const [count , dispatch] = useReducer(reducer ,initialstate)
    return (
        <>
         <h1>Usereducer</h1>
          <h1>{count}</h1>
          <button onClick={() => dispatch({type : "increment"})}>increment</button>
          <button onClick={() => dispatch({type : "decrement"})}>decrement</button>
          <button onClick={() => dispatch({type : "multi"})}>multi</button>
        

        </>
      );
}
 
export default Usereducer;