import React from 'react';
import { Component } from 'react';
import { createRef } from 'react';
class Uncontrolledcomponents extends Component {
    constructor(){
        super()
        this.input = createRef()
        this.data = createRef()
    }

    sumbit  = (event) =>{
        event.preventDefault()
        console.log("sumbit");
        console.log(this.input.current.value);
        console.log(this.data.current.value);

    }

    render() { 
        return (
            <>
             <form onSubmit={(event)=>this.sumbit(event)}>
                 <input type="text" ref={this.input} />
                 <input type="text" ref={this.data} />
                 <input type="submit" value="submit" />
                 {/* <button onClick={submit}>submit</button> */}
             </form>
            </>
        );
    }
}
 
export default Uncontrolledcomponents;