import React, { useEffect, useLayoutEffect } from 'react';

const Uselayouteffect = () => {

    // function test(){
    //     console.log("test");
    // }
    useEffect(()=>{
        console.log("useeffect test");
    },[])
    useEffect(()=>{
        console.log("useeffect test1");
    },[])
    useLayoutEffect(()=>{
        console.log("useLayoutEffect");
    },[])
    useEffect(()=>{
        console.log("useeffect test2");
    },[])
    // test()
    return ( 
        <>
          <h1>Uselayouteffect</h1>
        </>
     );
}
 
export default Uselayouteffect;