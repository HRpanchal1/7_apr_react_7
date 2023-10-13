import React from 'react';
import { Component } from 'react';

class Listandkeys extends Component {
    constructor(){
        super()
        this.state ={
            item : [1,2,3,4,5,6]  
        }
    }
    add = ()=>{
        console.log("add");
        this.setState({ item : [8,9,1,2,3,4,5,6,7]  })
    }
 
    render() { 
        // let item = [1,2,3,4,5,6]
        let items = this.state.item.map((list)=><li key={list.toString()} >{list}</li>)
        return (
            <>
              <h1>List and keys</h1>
              <ul>
                {items}
              </ul>
              <button onClick={this.add}>add</button>
            </>
        );
    }
}
 
export default Listandkeys;