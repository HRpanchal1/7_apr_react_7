import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Functioncompomenu from './Functioncompomenu';
import Functioncompointro from './Functioncompoitro';
import Functioncompoprops from './02Functioncompoprops';
import Usestate from './03Usestate';
import Useeffect from './04Useeffect';
import Uselayouteffect from './05Uselayouteffect';
import Usememo from './06Usememo';
import Usecallback from './07Usecallback';
import Useref from './08Useref';
import Api from './09Api';
import Usecontext from './10Usecontext';
import Usecontexthook from './11Usecontexthook';
import Usereducer from './12Usereducer';
import Usenavigate from './13Usenavigate';
import Apiget from './14Apiget';
import Apipost from './15Apipost';
import Crud from './16CRUD';
const Functionroutes = () => {
    return ( 
        <>

        <Routes>
            <Route path='/' element={<Functioncompomenu/>}>
                <Route path='Functioncompointro' element={<Functioncompointro/>} />
                <Route path='Functioncompoprops' element={<Functioncompoprops/>} />
                <Route path='Usestate' element={<Usestate/>} />
                <Route path='Useeffect' element={<Useeffect/>} />
                <Route path='Uselayouteffect' element={<Uselayouteffect/>} />
                <Route path='Usememo' element={<Usememo/>} />
                <Route path='Usecallback' element={<Usecallback/>} />
                <Route path='Useref' element={<Useref/>} />
                <Route path='Api' element={<Api/>} />
                <Route path='Usecontext' element={<Usecontext/>} />
                <Route path='Usecontexthook' element={<Usecontexthook/>} />
                <Route path='Usereducer' element={<Usereducer/>} />
                <Route path='Usenavigate' element={<Usenavigate/>} />
                <Route path='Apiget' element={<Apiget/>} />
                <Route path='Apipost' element={<Apipost/>} />
                <Route path='Crud' element={<Crud/>} />
            </Route>
        </Routes>
        </>
     );
}
 
export default Functionroutes;