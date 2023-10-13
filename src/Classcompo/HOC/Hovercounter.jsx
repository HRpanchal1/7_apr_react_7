import React from 'react';

import { Component } from 'react';
import Updatecomponent from './Hoc';

class Hovercounter extends Component {


    render() {
        return (<>
            <h1>Hover counter</h1>
            <h2>{this.props.count}</h2>
            <button onMouseEnter={this.props.update}>Update</button>
        </>);
    }
}

export default Updatecomponent(Hovercounter);