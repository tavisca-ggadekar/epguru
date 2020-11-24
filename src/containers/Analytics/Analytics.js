import React from 'react'
import classes from "./Analytics.module.css";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
class Analytics extends React.Component {
    state = {  }
    render() { 
        return <div className={classes.Analytics}>
           <div className={classes.row}>
                <Header page="Analytics"></Header>
            </div>
            <div className={classes.row}>
                <div className={classes.midcolumn1} style = {{backgroundColor:""}} >
                    <div className="card bg-light mb-3" style={{maxWidth: "18rem;"}}>
                            <SideNavigation></SideNavigation>
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
            <div className={classes.row}>
               <Footer></Footer>
            </div>
            </div>;
    }
}
 
export default Analytics;