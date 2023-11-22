import React, { createContext } from 'react';
import CompA from './CompA';

const Fname = createContext()

const Usecontext = () => {
    return (
        <>
            <h1>Usecontext</h1>
            <Fname.Provider value="vishal">
                <CompA name="hello" />
            </Fname.Provider>

        </>
    );
}

export default Usecontext;
export {Fname}