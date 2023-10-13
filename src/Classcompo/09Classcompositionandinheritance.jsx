import React from 'react';
import { Component } from 'react';
import Controlledcomponents from './06Controlledcomponents';


class Classcompositionandinheritance extends Component {

    render() {
        let data = "sameer"
        return (
            <>
                <h1>Classcompositionandinheritance</h1>
                <Controlledcomponents data={data}>
                    <h1>this is my website</h1>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis inventore officiis, cupiditate iure neque tenetur nobis, nemo illum libero dolorem distinctio sed est ipsam quaerat saepe sapiente natus consequuntur praesentium!</p>
                </Controlledcomponents>

            </>
        );
    }
}

export default Classcompositionandinheritance;