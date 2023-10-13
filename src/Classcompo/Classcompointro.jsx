import React from 'react';
import { Component } from 'react';
import Classcompoprops from './01Classcompoprops';
import Card from './02Card';

class Classcompointro extends Component {
    render() { 
        // let name = "hardik"
        // let user = {
        //     name : "rajiv",
        //     age : 25
        // }
        return (
            <>
              <h1>class intro</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus fugiat nihil, tenetur quisquam consequatur culpa illo facere reiciendis voluptates autem id molestiae assumenda corporis reprehenderit dolores cumque ipsum animi sapiente!</p>
              {/* <Classcompoprops user={user}/>
              <Card data="ravi"/> */}
            </>
        );
    }
}
 
export default Classcompointro;