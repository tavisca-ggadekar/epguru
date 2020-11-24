import React from 'react'
import classes from "./Pricing.module.css";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
class Pricing extends React.Component {
    state = {  }
    render() { 
        const i1 = require('../../assets/images/i1.png'); 
        const i2 = require('../../assets/images/i2.png'); 
        const i3 = require('../../assets/images/i3.png'); 
        return <div className={classes.Pricing}>
           
           <div className={classes.row}>
                <Header page="Pricing"></Header>
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
            <div className={classes.row}>
               <Footer></Footer>
            </div>
            </div>;
    }
}
 
export default Pricing;