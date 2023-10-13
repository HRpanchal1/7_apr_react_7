import React from 'react';
import { Component } from 'react';

const Updatecomponent = Originalcomponent=>{
    class  Newcomponent extends Component {
        constructor(){
            super()
            this.state = {
                count : 10
            }
        }
        Update = ()=>{
            console.log("update");
            this.setState({count : this.state.count + 1})
        }
        render() { 
            return (
                <>
                <Originalcomponent update={this.Update} count={this.state.count} name="Tushar"/>
                </>
            );
        }
    }
    return Newcomponent ;
}
export default Updatecomponent