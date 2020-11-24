import React from 'react'
import classes from "./Home.module.css";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
class Home extends React.Component {
    state = {  }
    render() { 
        const i1 = require('../../assets/images/i1.png'); 
        const i2 = require('../../assets/images/i2.png'); 
        const i3 = require('../../assets/images/i3.png'); 
        return <div className={classes.Home}>
            <div className={classes.toprow}>
                 <Header page="Home"></Header>
            </div>
            <div className={classes.toprow}>
                <div className={classes.midcolumn1} style = {{height:"auto",backgroundColor:"black",borderRight:"1px solid"}} >
                    <div className="card bg-light mb-3" style={{maxWidth: "18rem;"}}>
                        <SideNavigation></SideNavigation>
                    </div>
                </div>
                <div className={classes.midcolumn2} style = {{backgroundColor:""}}  >
                    <div className="card bg-light mb-3" style={{width:"100%"}}>
                    <div className="card-header">Enterprise Gurukul</div>
                    <div className="card-body">
                        <p className="card-text"> 
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                <img height="200px" src={i2} className="d-block w-100" alt="Image1"/>
                                </div>
                                <div className="carousel-item">
                                <img height="200px" src={i1} className="d-block w-100" alt="Imahe2"/>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"  data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                            </div>
                        </p>
                    </div>
                    <div className="card-body">
                        <p className="card-text"> 
                            <div className="card bg-light mb-3" style={{width:"100%"}}>
                                 
                                    <div className="card-body">
                                        <p className="card-text"> 
                                        <div className="container">
                                            <div className="row">
                                                <div className="col">
                                                <div className="card" style={{width: "18rem;"}}>
                                                    <img width="10px" height="100px" src={i3} className="card-img-top" alt="Img"/>
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                            Contact N0:+44 88777787
                                                        </p>
                                                    </div>
                                                    </div>
                                                </div>
                                                <div className="col">Director Message</div>
                                            </div>
                                            <div className="row">
                                                <div className="col-8">Services .........</div>
                                                <div className="col-4">Benefits.... </div>
                                            </div>
                                            </div>
                                                                                    </p>
                                    </div>
                                </div>
                        </p>
                    </div>
                    <div className="card-body">
                        <p className="card-text"> a</p>
                    </div>
                    <div className="card-body">
                        <p className="card-text">as a</p>
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
 
export default Home;