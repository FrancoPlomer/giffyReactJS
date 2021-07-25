import React from 'react';
import './App.css';
import ListOfGifs from './Components/ListOfGifs';
import { Link, Route } from 'wouter'

export default function App()
{    
    return(
        <div className="App">
            <h1>App</h1>                                                   
            <Link to="/gif/colombia">colombia</Link>
            <Link to="/gif/argentina">argentina</Link>
            <Link to="/gif/chile">chile</Link>
            <Route component={ListOfGifs}
            path="/gif/:keywords"/>                           
        </div>
    );
}
