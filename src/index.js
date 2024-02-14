import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {App} from './App';
import { Reg } from './Reg';
import { Student } from './Student';
import { Teacher } from './Teacher';
import { Admin } from './Admin';
import reportWebVitals from './reportWebVitals';
import { Login } from './Login';
import { Provider } from 'react-redux';
import {store} from './Store'
import { Route,BrowserRouter,Routes, } from 'react-router-dom';
import { View } from './View';
import { Update } from './Update';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <Provider store={store}>

    <BrowserRouter>
    <Routes>
    <Route path='/' element={<App/>}>
      <Route path='Reg' element={<Reg/>}/>
      <Route path='Login' element={<Login/>}/>
     <Route path='Student' element={<Student/>}/>
     <Route path='Teacher' element={<Teacher/>}/>
     <Route path='Admin' element={<Admin/>}/>
     <Route path='View' element={<View/>}/>
     <Route path='Update/:id' element={<Update/>}/>

     </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
