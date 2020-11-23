import React from 'react'
import classes from "./Pricing.module.css";
class Pricing extends React.Component {
    state = {  }
    render() { 
        const i1 = require('../../assets/images/i1.png'); 
        const i2 = require('../../assets/images/i2.png'); 
        const i3 = require('../../assets/images/i3.png'); 
        return <div className={classes.Pricing}>
           Pricing
           <div className={classes.row}>
                <div className={classes.column} style = {{backgroundColor:""}} >
                    <h2>  1</h2>
                    <p>Home button</p>
                </div>
                <div className={classes.column} style = {{backgroundColor:""}}  >
                        <div className="card bg-light mb-3" style={{maxWidth: "18rem"}}>
                           <div className="card-body">
                                <p className="card-text">
                                <span className="btn btn-primary">Enterprice Gurukul</span>
                                </p>
                            </div>  
                            <div className="card-body">
                                <p className="card-text">AboutUs</p>
                            </div>
                        </div>
                </div>
                <div className={classes.column} style = {{backgroundColor:""}}  >
                        <div className="card bg-light mb-3" style={{maxWidth: "18rem"}}>
                           <div className="card-body">
                                <p className="card-text">
                                <span className="btn btn-primary" style={{height:"30px"}}>Logo with home link</span>
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
            <div className={classes.row}>
                <div className={classes.midcolumn1} style = {{backgroundColor:""}} >
                    <div className="card bg-light mb-3" style={{maxWidth: "18rem;"}}>
                            <div className="card-header">ABOUT US</div>
                            <div className="card-header">PATHWAY OFFERING</div>
                            <div className="card-header">INTERACTION CENTER</div>
                            <div className="card-header">ANALYTICS</div>
                            <div className="card-header">AFFILICATION & EVENTS</div>
                            <div className="card-header">KNOWDLEDGE STUDIO</div>
                        </div>
                </div>
                <div className={classes.midcolumn2} style = {{backgroundColor:""}} >
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                        <div className="card mb-3"  >
                            <div className="row no-gutters">
                                <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className ="card-title">Pricing</h5>
                                    <p className="card-text"> XXXXXXXXXXXX</p>
                                    <p className="card-text">XXXXXXXXXXXX</p>
                                </div>
                                </div>
                                <div className="col-md-4">
                                <img src={i1} className="card-img" alt="..."/>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>  
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                            <div className="card mb-3"  >
                                <div className="row no-gutters">
                                <div className="col-md-4">
                                    <img src={i2} className="card-img" alt="..."/>
                                    </div>
                                    <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className ="card-title">Terms & Conditions</h5>
                                        <p className="card-text"> XXXXXXXXXXXX</p>
                                        <p className="card-text">XXXXXXXXXXXX</p>
                                    </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                            <div className="card mb-3"  >
                                    <div className="row no-gutters">
                                        <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className ="card-title"> Disclaimer</h5>
                                            <p className="card-text"> XXXXXXXXXXXX</p>
                                            <p className="card-text">XXXXXXXXXXXX</p>
                                        </div>
                                        </div>
                                        <div className="col-md-4">
                                         <img src={i3} className="card-img" alt="..."/>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>   
                </div>
            </div>
            </div>;
    }
}
 
export default Pricing;