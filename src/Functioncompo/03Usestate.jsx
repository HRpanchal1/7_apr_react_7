import React from 'react';
import { useState } from 'react';

const Usestate = () => {
    const [count, setCount] = useState(10)
    const [name, setName] = useState("raj")

    function update() {
        setCount(count + 1)
    }

    function updatetext() {
        setName("das")
    }
    return (
        <>
            <h1>Usestate</h1>
            <h2>{count}</h2>
            <h2>{name}</h2>
            <button onClick={update}>updatecount</button>
            <button onClick={updatetext}>updatecount</button>
        </>
    );
}

export default Usestate;