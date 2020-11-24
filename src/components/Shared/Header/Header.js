import React, { Component } from 'react';
import classes from './Header.module.css'
import HomeImage from '../../../components/Shared/HomeImage/HomeImage'
import { NavLink } from "react-router-dom";
class Header extends Component {
    state = {  }
    render() { 
        const VichagLogo = require('../../../assets/images/VichagLogo.png'); 
        return <React.Fragment>
            <div className={classes.Header}>
            <div className={classes.column} style = {{backgroundColor:""}} >
                    <HomeImage></HomeImage>
                </div>
                <div className={classes.column} style = {{backgroundColor:""}}  >
                        <div className="card bg-light mb-3" style={{maxWidth: "18rem"}}>
                           <div className="card-body">
                                <p className="card-text">
                                <span className="btn btn-primary">Enterprice Gurukul</span>
                                </p>
                            </div>  
                            <div className="card-body">
                                    <p className="card-text"> {this.props.page}</p>
                            </div>
                        </div>
                </div>
                <div className={classes.column} style = {{backgroundColor:""}}  >
                        <div className="card bg-light mb-3" style={{maxWidth: "18rem"}}>
                           <div className="card-body">
                                <p className="card-text">
                                    <NavLink  to="/" > <img style={{borderRadius:"10px"}} height="60px" width="60px" src={VichagLogo} alt="Home"></img></NavLink> 
                                </p>
                            </div>  
                            <div className="card-body">
                                <p className="card-text">Search: <input type='text'></input></p>
                            </div>
                            <div className="card-header">Contact Us</div>
                            <div className="card-body">
                                <p className="card-text">Admin@xyz.com</p>
                                <p className="card-text">+44 9888787877</p>
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>;
    }
}
 
export default Header;