import React from 'react';
import { Component } from 'react';
import Updatecomponent from './Hoc';

class Clickcounter extends Component {

    data = ()=>{
        console.log("data");
    }
    render() {
        return (
            <>
                <h1>Clickcounter</h1>
                     <h2>{this.props.count}</h2>
                     <h3>{this.props.name}</h3>
                     <button onClick={this.props.update}>Update</button>
            </>
        );
    }
}

export default Updatecomponent(Clickcounter);