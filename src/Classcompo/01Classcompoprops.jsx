import React from 'react';
import { Component } from 'react';
class Classcompoprops extends Component {
    render() { 
        return (
            <>
              <h1>Classcompo props</h1>
              <h2>{this.props.user.name}</h2>
              <h2>{this.props.user.age}</h2>
            </>
        );
    }
}
 
export default Classcompoprops;