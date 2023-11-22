import React, { useCallback } from 'react';
import { useState } from 'react';
import Childcompo from './Childcompo';

const Usecallback = () => {

    const [count , setCount] = useState(5)

    const [item , setItem] = useState(10)

    const data = useCallback( function data (){
        return
    },[])
    return ( 
        <>
          <h1>Usecallback</h1>
          <h2>{count}</h2>
         <h2>{item}</h2>
         <Childcompo data={data}/>
         {/* <h2>{test}</h2> */}
         <button onClick={()=>setCount(count + 3)}>updatecount</button>
         <button onClick={()=>setItem(item + 3)}>updateitems</button>
        </>
     );
}
 
export default Usecallback;