import React from 'react';
import { Component } from 'react';

class Controlledcomponents extends Component {
    constructor(){
        super()
        this.state = {
            name : ""
        }
    }
   
    sumbit  = (event) =>{
        event.preventDefault()
        // console.log("sumbit");
        console.log(this.state.name);
        

    }
    render() { 
        return (
            <>
            <form onSubmit={(event)=>this.sumbit(event)}>
                 <input type="text" className='input' value={this.state.name}
                  onChange={(e)=>this.setState({name : e.target.value})} />
                 {/* <input type="text" /> */}
                 <input type="submit" value="submit" />
                 <h2>{this.props.data}</h2>
                 <div>
                    {this.props.children}
                 </div>
                 {/* <button onClick={submit}>submit</button> */}
             </form>
            </>
        );
    }
}
 
export default Controlledcomponents;