import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import HomePage from './components/HomePage';
import {BrowserRouter , HashRouter, Route,Routes} from "react-router-dom"
import GoutsList from './components/GoutsList';
import IntesityLevel from './components/IntesityLevel';
import Succes from './components/Succes';
import WaterProgressBar from './components/WaterProgressBar/WaterProgressBar';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Cards from './components/Cards';
import CardAdministration from './components/CardAdministration';
import Main from './components/Main';
import PassCardPage from './components/PassCardPage';

import reducers from './reducers';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"


const store = createStore(reducers,applyMiddleware(thunk))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div>
    <HashRouter>
    <Routes>
        <Route path='/' element={<HomePage/>}/>
        {/* <Route path='/passCard' element={<PassCardPage/>}/> */}
        <Route path='/gouts' element={<GoutsList/>}/>
        {/* <Route path='/App' element={<App/>}/> */}
        <Route path="/auth" element={<Auth/>}/>
        <Route path='/IntesityLevels' element={<IntesityLevel/>}/>
        <Route path='/SuccesDeguster' element={<Succes/>}/>
        <Route path='/loader' element={<WaterProgressBar/>}/>
        <Route path='/dashboard' element={<Dashboard/>} >
          <Route index element={<Main/>}/>
          {/* <Route path='devices' element={<Devices/>}/> */}
          {/* <Route path='weather' element={<Weather/>}/> */}
          <Route path='cards' element={<Cards/>}/>
{/*           <Route path='admin' element={<CardAdministration/>}/> */}
        </Route>
    </Routes>

    </HashRouter>
   
   
    </div>
    
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
