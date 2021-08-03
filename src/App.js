/**
 * This App.js file contains routing set up for different pages in website.
 */

 import React from "react";
 import { BrowserRouter, Route, Switch } from 'react-router-dom';
 
 
 import VirtualMicrobit from "./pages/VirtualMicrobit";
 import Game from './pages/Game';
 import Navigation from './pages/Navigation';
 
 import "./App.css";
 
 const App = () => {
   return (
            <BrowserRouter>
            <div className="App">
              <Navigation />
                <Switch>
                 <Route path="/react-project" component={VirtualMicrobit} exact/>
                 <Route path="/game" component={Game}/>
               </Switch>
            </div> 
          </BrowserRouter>
   );
 };
 
 export default App;
 