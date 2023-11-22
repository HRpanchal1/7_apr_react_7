import React, { useEffect, useState } from 'react';

const Useeffect = () => {

    const [item , setItem] = useState(0)
    const [count , setCount] = useState(10)

    useEffect(()=>{
        alert("hello.. welcome to my site")
    },[count])
   const add = ()=>{
    setItem(item + 1)
    
   }
   const count1 = ()=>{
    setCount (count + 5)
   }
    return ( 
        <>
          <h1>useeffect</h1>
          <h2>{item}</h2>
          <h2>{count}</h2>
          <button onClick={add}>additem</button>
          <button onClick={count1}>addcount</button>
        </>
     );
}
 
export default Useeffect;