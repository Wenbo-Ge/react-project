/**
 * This App.js file contains routing set up for different pages in website.
 */

 import React from "react";
 import { Switch, Route } from 'react-router-dom';
 
 
 import VirtualMicrobit from "./pages/VirtualMicrobit";
 
 import "./App.css";
 
 const App = () => {
   return (
     <div className="App">
       <VirtualMicrobit />
     </div>
   );
 };
 
 export default App;
 