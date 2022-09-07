import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Layout from '../Layouts/Layout';
import Login from './login';
import Users from '../Pages/Users';
import Export from './Export';
import States from './States';
import Rta from './RTA';

export default function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Login />}/>
                <Route path='/Layout' element={<Layout />}>
                    <Route index element={<Users />}/>
                    <Route path='/Layout/Export' element={<Export/>}/>
                    <Route path='/Layout/RTA' element={<Rta/>}/>
                </Route>
                <Route path='/states' element={<States/>}/>
                </Routes>
        </BrowserRouter>
  )
}
