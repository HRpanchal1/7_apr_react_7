import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Functioncompomenu from './Functioncompomenu';
import Functioncompointro from './Functioncompoitro';
import Functioncompoprops from './02Functioncompoprops';
import Usestate from './03Usestate';
const Functionroutes = () => {
    return ( 
        <>

        <Routes>
            <Route path='/' element={<Functioncompomenu/>}>
                <Route path='Functioncompointro' element={<Functioncompointro/>} />
                <Route path='Functioncompoprops' element={<Functioncompoprops/>} />
                <Route path='Usestate' element={<Usestate/>} />
            </Route>
        </Routes>
        </>
     );
}
 
export default Functionroutes;