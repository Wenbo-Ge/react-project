import React from 'react';
 
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import GTranslateIcon from '@material-ui/icons/GTranslate';
 
const Navigation = () => {
    const styleObj = {
        columns: 2
      };
    return (
       <div className="Nav" style={styleObj}>
           <div className="Nav1" style={{textAlign:"left"}}>
           <NavLink to="/react-project"><HomeIcon color="secondary" /></NavLink>
           </div>
           <div className="Nav2" style={{textAlign:"right"}}>
           <NavLink to="/game"><GTranslateIcon color="secondary" /></NavLink>
           </div>
          
          
       </div>
    );
}
 
export default Navigation;