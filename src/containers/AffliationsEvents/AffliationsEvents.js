import React from 'react'
import classes from "./AffliationsEvents.module.css";
class AffliationsEvents extends React.Component {
    state = {  }
    render() { 
        const i1 = require('../../assets/images/i1.png'); 
        return <div className={classes.AffliationsEvents}>
           AffliationsEvents
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
                                <p className="card-text">  Affliations & Events</p>
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
                            <div className="card-header">PATHWAY OFFERING</div>
                            <div className="card-header">INTERACTION CENTER</div>
                            <div className="card-header">ANALYTICS</div>
                            <div className="card-header">AFFILICATION & EVENTS</div>
                            <div className="card-header">KNOWDLEDGE STUDIO</div>
                            <div className="card-header">PRICING  T&CS</div>
                        </div>
                </div>
                <div className={classes.midcolumn2} style = {{backgroundColor:""}} >
                    <div className={classes.row}>
                        <div className={classes.c1column1} style = {{backgroundColor:""}} > 
                        <div className={classes.row}>
                            <div className="card bg-light mb-3"  >
                            <div className="card-header">Affliations</div>
                            <div className="card-body">
                                    <p className="card-text">
                                    <div className="card mb-3"  >
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className ="card-text">XX</h5>
                                                <p className="card-text"> XX</p>
                                                <p className="card-text">XX</p>
                                            </div>
                                            </div>
                                            <div className="col-md-4">
                                            <img src={i1} className="card-img" alt="..."/>
                                            </div>
                                        </div>
                                        </div>
                                    </p>
                                </div>  
                                <div className="card-body">
                                    <p className="card-text"> 
                                    <div className="card mb-3"  >
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className ="card-text">XX</h5>
                                                <p className="card-text"> XX</p>
                                                <p className="card-text">XX</p>
                                            </div>
                                            </div>
                                            <div className="col-md-4">
                                            <img src={i1} className="card-img" alt="..."/>
                                            </div>
                                        </div>
                                        </div>
                                        </p>
                                </div>
                                <div className="card-body">
                                    <p className="card-text">   
                                    <div className="card mb-3"  >
                                        <div className="row no-gutters">
                                            <div className="col-md-8">
                                            <div className="card-body">
                                                <h5 className ="card-text">XX</h5>
                                                <p className="card-text"> XX</p>
                                                <p className="card-text">XX</p>
                                            </div>
                                            </div>
                                            <div className="col-md-4">
                                            <img src={i1} className="card-img" alt="..."/>
                                            </div>
                                        </div>
                                        </div>
                                    </p>
                                </div>
                            </div>
                            </div>
                            <div className={classes.row}>

                                    <div className="card bg-light mb-3"  >
                                    <div className="card-header">MEMBER / PARTNER SPEAK</div>
                                    <div className="card-body">
                                            <p className="card-text">
                                            <table className="table">
                                                <thead className="thead-dark">
                                                    <tr>
                                                    <th scope="col"> </th>
                                                    <th scope="col"> </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                    <td>XXXXXXXXX</td>
                                                    <td> NAME: XXXXXXXXX</td>
                                                    </tr>
                                                    <tr>
                                                    <td>  XXXXXXXXX</td>
                                                    <td> NAME:  XXXXXXXXX</td>
                                                    </tr>
                                                    <tr>
                                                    <td>  XXXXXXXXX</td>
                                                    <td> NAME:  XXXXXXXXX</td>
                                                    </tr>
                                                </tbody>
                                                </table>
                                            </p>
                                        </div>  
                                        </div> 
                                </div>
                        </div>
                        <div className={classes.c1column2} style = {{backgroundColor:""}} > 
                            Event
                            <br></br>
                            Rolling maroquee
                            <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>XX</td>
                                <td>XX</td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>XX</td>
                                <td>XX</td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>XX</td>
                                <td>XX</td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>  
                </div>
            </div>
            </div>;
    }
}
 
export default AffliationsEvents;