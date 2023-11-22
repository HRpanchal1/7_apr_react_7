import React, { useEffect, useState } from 'react';

const Api = () => {
    const [userdata , setUserdata] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/todos").then((result) => {
            result.json().then((resp)=>{
                console.log(resp);
                setUserdata(resp)
            })
            // console.log(result);
            console.log(userdata);
        })
    }, [])

    return (
        <>
            <h1>Api</h1>
            <table width="50%" border="1">
                <tr>
                    <td>userId</td>
                    <td>id</td>
                    <td>title</td>
                    <td>completed</td>
                </tr>
                {
                    userdata.map((item)=>
                     <tr>
                        <td>{item.userId}</td>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        {/* <td>{item.completed}</td> */}
                     </tr>
                    )
                }
            </table>

        </>
    );
}

export default Api;