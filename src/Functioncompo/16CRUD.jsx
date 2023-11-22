import React, { useState } from 'react';
import "./Crud.css"
const Crud = () => {
    const [name, setName] = useState("")
    const [alldata, setAlldata] = useState([])
    const [show , setShow] = useState(false)
    const [edittext, setEdittext] = useState("")

    const dataadd = () => {
        console.log("data", name);
        if (name.length !== 0) {
            setAlldata(newdata => [...newdata, name])
            setName("")
        }
    }
    console.log(alldata);

    const deletdata = (i) => {
        alldata.splice(i, 1)
        console.log("delet");
        setAlldata([...alldata])
    }
    const editdata = (index) => {
        console.log("editdata");
        setName(alldata[index])
        setShow(true)
        setEdittext(index)
    }
    const updatedata = () =>{
        alldata.splice(edittext,1,name)
        setAlldata([...alldata])
        setName("")
        setShow(false)
    }
    // const demo = (e) =>{
    //     // setName(e.target.)
    //     setName(e.target.value)
    // }
    return (
        <>
            <h1>Crud</h1>
            <div className='input-fl'>
                {/* <form > */}
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                {!show ? <button onClick={dataadd}>Add-data</button> : 
                <button onClick={updatedata}>update-data</button>}
                {/* </form> */}
            </div>

            {
                alldata.map((val, i) =>
                    <div className='but-fl'>
                        <h1>{val}</h1>
                        {/* <h1>{i}</h1> */}
                        <button className='edit' onClick={() => editdata(i)}>edit</button>
                        <button className='delet' onClick={() => deletdata(i)}>delet</button>
                    </div>
                )
            }
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

export default Crud;