import React, { useState, useEffect} from 'react';

const Apiget = () => {

    const [api , apiData] = useState([])

    useEffect(() => {
        fetch("http://localhost:5000/user").then((result) => {
            result.json().then((resp)=>{
                console.log(resp);
                apiData(resp)
            })
            // console.log(result);
            console.log(api);
        })
    }, [])
    return (
        <>
            <h1>Apiget json-server</h1>

            <table width="50%" border="1">
                <tr>
                    <td>id</td>
                    <td>name</td>
                    <td>age</td>
                    <td>loction</td>
                </tr>
                {
                    api.map((item)=>
                     <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.loction}</td>
                     </tr>
                    )
                }
            </table >
        </>
    );
}

export default Apiget;