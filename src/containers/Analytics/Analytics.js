import React from 'react'
import classes from "./Analytics.module.css";
class Analytics extends React.Component {
    state = {  }
    render() { 
        return <div className={classes.Analytics}>
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
                                <p className="card-text">Analytics</p>
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
                            <div className="card-header">AFFILICATION & EVENTS</div>
                            <div className="card-header">KNOWDLEDGE STUDIO</div>
                            <div className="card-header">PRICING  T&CS</div>
                        </div>
                </div>
                <div className={classes.midcolumn2} style = {{backgroundColor:""}} >
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                                <div className="card bg-light mb-3"  >
                                <div className="card-body">
                                        <p className="card-text">
                                            User (Member/Admin) Login
                                        </p>
                                        <p className="card-text">
                                           (Autentication)
                                        </p>
                                        <p className="card-text">
                                           (To access authorised Reports)
                                        </p>
                                    </div>  
                                </div>
                        </div>
                        </div>  
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                            <div className="card bg-light mb-3"  >
                                <div className="card-header">Reports: Accessible by registered users/ admin / other</div>
                                    <div className="card-body">
                                            <p className="card-text">
                                              Date: From: .... , TO: ... List all events y/n
                                            </p>
                                            <p className="card-text">
                                            Events details (Output) (Popup window/Exportable)
                                            </p>
                                            <p className="card-text">
                                            <strong> Start up details </strong>
                                            </p>
                                            <p className="card-text">
                                            Sector: ... , Geography: ... , Required area of expertise.
                                            </p>
                                            <p className="card-text">
                                            Details of fund provided...
                                            </p>
                                            <p className="card-text">
                                            Matching output from database.(Tabuler op/ Popup/Exportable)
                                            </p>
                                            <p className="card-text">
                                            Psychometrics test report (Export buttum)
                                            </p>
                                        </div>  
                                    </div>
                        </div>
                    </div> 
                    
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                        <div className="card bg-light mb-3"  >
                                <div className="card-header">Reports: Accessible by   admin / Director</div>
                                    <div className="card-body">
                                            <p className="card-text">
                                             Filter criteria
                                            </p>
                                            <p className="card-text">
                                            <strong>  a) </strong> List of registred users (filtered date, Geography, sector, Secker/giver, expertise , invester)
                                            </p>
                                            <p className="card-text">
                                            <strong>  b) </strong> List of participants (Titled by date and events)
                                            </p>
                                            <p className="card-text">
                                            <strong>  c) </strong> Performance Report.(Psychometric test) (Titled by date and username, score)
                                            </p>
                                            <p className="card-text">
                                            <strong>  d) </strong> Site viewers reports
                                            </p>
                                        </div>  
                                    </div>
                        </div>
                    </div>  
                </div>
            </div>
            </div>;
    }
}
 
export default Analytics;