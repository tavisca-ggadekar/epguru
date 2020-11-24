import React from 'react'
import classes from "./Index.module.css";
import SideNavigation from "../../components/SideNavigation/SideNavigation";
import Header from '../../components/Shared/Header/Header';
import Footer from '../../components/Shared/Footer/Footer';
class Index extends React.Component {
    state = {  }
    render() { 
       
        return <div className={classes.Index}>
            <div className={classes.row}>
                <Header page="Interaction center"></Header>
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
                                        <span className="btn btn-primary" style={{height:"30px"}}>User login (Authentication) (For calender appointment booking)</span>
                                    </p>
                                </div>  
                            </div> 
                        </div>
                    </div> 
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                            <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                                <div className="card bg-light mb-3"  >
                                    <div className="card-body">
                                        <p className="card-text">
                                            <span className="btn btn-primary" style={{height:"30px"}}>calender appointment booking</span>
                                        </p>
                                    </div>  
                                </div> 
                            </div>
                        </div>
                    </div> 
                    <div className={classes.row}>
                        <div className={classes.c1column} style = {{width:"25%"}} >   
                            <div className="card bg-light mb-3"  >
                                <div className="card-body">
                                    <p className="card-text">
                                       1 Hr prep session   
                                    </p>
                                    <p className="card-text">
                                       Image here
                                    </p>
                                    <p className="card-text">
                                      ..........
                                    </p>
                                </div>  
                                <div className="card-header">Book</div>
                            </div> 
                        </div>
                        <div className={classes.c1column} style = {{width:"25%"}} >   
                            <div className="card bg-light mb-3"  >
                                <div className="card-body">
                                    <p className="card-text">
                                        Idea challeng workshop
                                        </p>
                                        <p className="card-text">
                                        Image here
                                        </p>
                                        <p className="card-text">
                                        ..........
                                        </p>
                                </div>  
                                <div className="card-header">Book</div>
                            </div> 
                        </div>
                        <div className={classes.c1column} style = {{width:"25%"}} >   
                            <div className="card bg-light mb-3"  >
                                <div className="card-body">
                                    <p className="card-text">
                                        Expert advice forum
                                        </p>
                                        <p className="card-text">
                                        Image here
                                        </p>
                                        <p className="card-text">
                                        ..........
                                        </p>
                                </div>  
                                <div className="card-header">Book</div>
                            </div> 
                        </div>
                        <div className={classes.c1column} style = {{width:"25%"}}>   
                            <div className="card bg-light mb-3"  >
                                <div className="card-body">
                                    <p className="card-text">
                                        Invester pitch submit
                                        </p>
                                        <p className="card-text">
                                        Image here
                                        </p>
                                        <p className="card-text">
                                        ..........
                                        </p>
                                </div>  
                                <div className="card-header">Book</div>
                            </div> 
                        </div>
                    </div> 
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} >  
                                <div className="card bg-light mb-3"  >
                                    <div className="card-body">
                                        <p className="card-text">
                                            General brodcast
                                        </p>
                                        <p className="card-text">
                                            Rolling marqueue weekly email update with EG link
                                        </p>
                                        <p className="card-text">
                                         matter to be imported / Free text editable
                                        </p>
                                    </div>  
                                    <div className="card-header">Book</div>
                                </div>  
                        </div>
                    </div> 
                    <div className={classes.row}>
                        <div className={classes.c2column1} style = {{backgroundColor:""}} >  
                            <div className="card bg-light mb-3"  >
                                    <div className="card-body">
                                        <p className="card-text">
                                           Open house with the 
                                        </p>
                                        <p className="card-text">
                                            director
                                        </p>
                                        <p className="card-text">
                                          Copy past below link 
                                          http:??...
                                          (To be active only for timeslots)
                                        </p>
                                    </div>  
                                </div>  
                        </div>
                        <div className={classes.c2column1} style = {{backgroundColor:""}} >   
                            <div className="card bg-light mb-3"  >
                                <div className="card-body">
                                    <p className="card-text">
                                        Talk channel 
                                    </p>
                                    <p className="card-text">
                                       Title : Link
                                    </p>
                                    <p className="card-text">
                                       Title : Link
                                    </p>
                                    <p className="card-text">
                                       Title : Link
                                    </p>
                                    <p className="card-text">
                                       Upload to / Download from 
                                    </p>
                                </div>  
                            </div> 
                        </div>
                    </div> 
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} >   
                        <div className="card bg-light mb-3"  >
                                <div className="card-body">
                                    <p className="card-text">
                                        Facebook
                                    /
                                       Twitter 
                                       /
                                       LinkedInn
                                       /
                                       Blog
                                    </p>
                                </div>  
                            </div> 
                        </div>
                    </div> 
                    <div className={classes.row}>
                        CHat window
                    </div>
                </div>
            </div>
            <div className={classes.row}>
               <Footer></Footer>
            </div>
            </div>;
    }
}
 
export default Index;