import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Child } from './FunctionalComponentExample';
import MainPage from './Pages/MainPage';
function App() {
    console.log('test')
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={MainPage} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
