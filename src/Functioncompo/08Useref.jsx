import React, { useRef } from 'react';


const Useref = () => {

    const inputref = useRef(null)
    const phonenumberref = useRef(null)

    const inputdata = ()=>{
      console.log("data");
      console.log(inputref.current.value);
      inputref.current.style.color = "red"
    }
    return (
        <>
            <h1>useref</h1>

            <input type="text" ref={inputref}/>
            <input type="text" ref={phonenumberref}/>
            <button onClick={inputdata}>submit</button>

        </>
    );
}

export default Useref;
