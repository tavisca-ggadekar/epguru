import React from 'react'
import { NavLink } from "react-router-dom";
class HomeImage extends React.Component {
    state = {  }
    render() { 
        const HomeImg = require('../../../assets/images/Home.png'); 
        return <React.Fragment>
                   <NavLink  to="/" > <img style={{borderRadius:"40px"}} height="60px" width="60px" src={HomeImg} alt="Home"></img></NavLink>     
                </React.Fragment>;
    }
}
 
export default HomeImage;
