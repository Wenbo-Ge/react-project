import React from 'react';
 
import { NavLink } from 'react-router-dom';
 
const Navigation = () => {
    const styleObj = {
        columns: 2
      };
    return (
       <div className="Nav" style={styleObj}>
           <div className="Nav1" style={{textAlign:"left"}}>
           <NavLink to="/react-project">VirtualMicrobit</NavLink>
           </div>
           <div className="Nav2" style={{textAlign:"right"}}>
           <NavLink to="/game">Game</NavLink>
           </div>
          
          
       </div>
    );
}
 
export default Navigation;