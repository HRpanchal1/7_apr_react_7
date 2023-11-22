import React, { useState } from 'react';
import { json } from 'react-router-dom';

const Apipost = () => {
    const [name , setName] = useState("")
    const [email , setEmail] = useState("")
    const [password , setPassword] = useState("")

    const submit = () =>{
        // console.log(name , email, password);
        let data = {name , email , password}
        console.log(data);
        fetch('http://localhost:5000/user' , {
           method: "POST",
           headers :{
            "Content-Type": "application/json" 
           },
           body : JSON.stringify(data)
        }).then((result) =>{
            result.json().then((resp) =>{
                console.log(resp);
            })
        })
    }

    return ( 
        <>
         <h1>Api post</h1>

        username <input type="text"
           value={name}
           onChange={(e)=>setName(e.target.value)}
         placeholder='enter your name' /> <br />
        email <input type="email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         placeholder='enter your email' /> <br />
        password <input type="password"
         value={password}
         onChange={(e)=>setPassword(e.target.value)}
         placeholder='enter your password' /> <br />
        <button onClick={submit}>submit</button>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        </>
     );
}
 
export default Apipost;