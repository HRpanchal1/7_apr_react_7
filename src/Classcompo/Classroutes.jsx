import React from 'react';
import { Routes , Route } from 'react-router-dom';
import Classmenu from './Classmenu';
import { Component } from 'react';
import Classcompointro from './Classcompointro';
import Classcompoprops from './01Classcompoprops';
import Card from './02Card';
import Classcompostate from './04Classcompostate';
import Uncontrolledcomponents from './05Uncontrolledcomponents';
import Controlledcomponents from './06Controlledcomponents';
import ConditionalRendering from './07ConditionalRendering';
import Listandkeys from './08Listandkeys';
import Classcompositionandinheritance from './09Classcompositionandinheritance';
import Maincounter from './HOC/Maincounter';
class Classroutes extends Component {
  render() { 
    return (
      <>
      <Routes>
        <Route path='/' element={<Classmenu/>}>
          {/* <Route path='Classcompointro' element={<Classcompointro/>}/> */}
          <Route path='Classcompoprops' element={<Classcompoprops/>}/>
          <Route path='Card' element={<Card/>}/>
          <Route path='Classcompostate' element={<Classcompostate/>}/>
          <Route path='Uncontrolledcomponents' element={<Uncontrolledcomponents/>}/>
          <Route path='Controlledcomponents' element={<Controlledcomponents/>}/>
          <Route path='ConditionalRendering' element={<ConditionalRendering/>}/>
          <Route path='Listandkeys' element={<Listandkeys/>}/>
          <Route path='Classcompositionandinheritance' element={<Classcompositionandinheritance/>}/>
          <Route path='Maincounter' element={<Maincounter/>}/>
        </Route>
      </Routes>
        
      </>
    );
  }
}
 
export default Classroutes;