import React, { createContext } from 'react';
import One from './One';

const Fname = createContext()

const Usecontexthook = () => {
    const user = {
        name : "hardik",
        age : 25
    }
    return ( 
        <>
         <h1>Usecontexthook</h1>
         <Fname.Provider value={user.name +  user.age} >
         <One/>
         </Fname.Provider>
        </>
     );
}
 
export default Usecontexthook;
export {Fname}