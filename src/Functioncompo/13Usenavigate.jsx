import React from 'react';
import { useNavigate } from 'react-router-dom';

const Usenavigate = () => {

    const navigate = useNavigate()

    const navi = () =>{
        navigate("/")
    }
    return ( 
        <>
          <h1>usenavigate</h1>
          <button onClick={navi}>hello i am navigate</button>
        </>
     );
}
 
export default Usenavigate;