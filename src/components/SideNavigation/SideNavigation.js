import React from 'react';
import { NavLink } from "react-router-dom";
class SideNavigation extends React.Component {
    state = {  }
    render() { 
        return <React.Fragment>
                    <div className="card-header"><NavLink   to="/" > Home</NavLink></div>
                    <div className="card-header"><NavLink   to="/aboutus" > ABOUT US </NavLink></div>
                    <div className="card-header"> <NavLink   to="/index" >  PATHWAY OFFERING ??</NavLink> </div>
                    <div className="card-header"> <NavLink   to="/index" >  INTERACTION CENTER</NavLink> </div>
                    <div className="card-header"> <NavLink   to="/analytics" > ANALYTICS </NavLink> </div>
                    <div className="card-header"> <NavLink   to="/affliationsevents" > AFFILICATION & EVENTS </NavLink> </div>
                    <div className="card-header"><NavLink   to="/knowledgestudio" >  KNOWDLEDGE STUDIO</NavLink></div>
                    <div className="card-header"><NavLink   to="/pricing" > PRICING  T&CS </NavLink></div>
                </React.Fragment>;
    }
}
 
export default SideNavigation;