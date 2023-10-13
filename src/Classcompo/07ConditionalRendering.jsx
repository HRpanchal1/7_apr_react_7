import React from 'react';

import { Component } from 'react';
class ConditionalRendering extends Component {
    constructor(){
        super()
        this.state ={
            islogin : true
        }
    }

    render() { 

        return this.state.islogin &&  <h1>welcome tops</h1> 


        // return this.state.islogin ?  <h1>welcome tops</h1> : <h1>welcome user</h1>

        // let msg 

        // if (this.state.islogin) {
        //     msg = <h1>welcome tops</h1>
            
        // }
        // else{
        //     msg =  <h1>welcome user</h1>
        // }
        // return msg

        // if(this.state.islogin){
        //     return <h1>welcome tops</h1>
             
        // }
        // else{
        //     return  <h1>welcome user</h1>
        // }
    }
}
 
export default ConditionalRendering;