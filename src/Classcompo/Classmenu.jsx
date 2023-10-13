import React from 'react';
import { Component } from 'react';
import { Link , Outlet } from 'react-router-dom';

class Classmenu extends Component {
  
    render() { 
        return (
            <>
              <ul>
                {/* <li><Link to="Classcompointro">Classcompointro</Link></li> */}
                <li><Link to="Classcompoprops">Classcompoprops</Link></li>
                <li><Link to="Card">Card</Link></li>
                <li><Link to="Classcompostate">Classcompostate</Link></li>
                <li><Link to="Uncontrolledcomponents">Uncontrolledcomponents</Link></li>
                <li><Link to="Controlledcomponents">Controlledcomponents</Link></li>
                <li><Link to="ConditionalRendering">ConditionalRendering</Link></li>
                <li><Link to="Listandkeys">Listandkeys</Link></li>
                <li><Link to="Classcompositionandinheritance">Classcompositionandinheritance</Link></li>
                <li><Link to="Maincounter">Maincounter</Link></li>
              </ul>
              <Outlet></Outlet>
            </>
        );
    }
}
 
export default Classmenu;