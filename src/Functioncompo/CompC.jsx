import React from 'react';
import { Fname } from './10Usecontext';

const CompC = () => {
    return (
        <>

            <h1>data</h1>
            <Fname.Consumer>
                {
                    (name) => {
                        return <h1>{name}</h1>
                    }
                }
            </Fname.Consumer>
        </>
    );
}

export default CompC;