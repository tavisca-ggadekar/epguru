import React from 'react'
import classes from "./AffliationsEvents.module.css";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Footer from '../../components/Shared/Footer/Footer';
import Header from '../../components/Shared/Header/Header';
class AffliationsEvents extends React.Component {
    state = {  }
    render() { 
        const i1 = require('../../assets/images/i1.png'); 
        return <div className={classes.AffliationsEvents}>
           <div className={classes.row}>  
                <Header page=" Affliations & Events"></Header>
            </div>
            <div className={classes.row}>
                <div className={classes.midcolumn1} style = {{backgroundColor:""}} >
                    <div className="card bg-light mb-3" style={{maxWidth: "18rem;"}}>
                        <SideNavigation></SideNavigation>
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
            <div className={classes.row}>
               <Footer></Footer>
            </div>
            </div>;
    }
}
 
export default AffliationsEvents;