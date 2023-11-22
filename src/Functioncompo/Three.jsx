import React, { useContext } from 'react';
import { Fname } from './11Usecontexthook';

const Three = () => {
    const name = useContext(Fname)
    return (
        <>
            <h1>data of compo</h1>
            <h2>{name}</h2>
            {/* <h2>{name}</h2> */}

        </>
    );
}

export default Three;