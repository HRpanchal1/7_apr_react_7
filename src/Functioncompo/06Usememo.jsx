import React, { useMemo, useState } from 'react';

const Usememo = () => {
  const [count , setCount] = useState(5)

  const [item , setItem] = useState(10)

   const test = useMemo(function test(){
    console.log("count test");
    return count * 5
  },[count])

    return ( 
        <>

         <h1>usememo</h1>
         <h2>{count}</h2>
         <h2>{item}</h2>
         <h2>{test}</h2>
         <button onClick={()=>setCount(count + 3)}>updatecount</button>
         <button onClick={()=>setItem(item + 3)}>updateitems</button>
        </>
     );
}
 
export default Usememo;