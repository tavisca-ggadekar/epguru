import React from 'react'
import classes from "./KnowledgeStudio.module.css";
class KnowledgeStudio extends React.Component {
    state = {  }
    render() { 
        return <div className={classes.KnowledgeStudio}>
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
                                <p className="card-text"> Knowledge Studio</p>
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
                                <div className="card-header">Repository: Accessible by registered users/ admin / Director</div>
                                    <div className="card-body">
                                            <p className="card-text">
                                                <div className="card mb-3"  >
                                                <div className="row no-gutters">
                                                    <div className="col-md-8">
                                                    <div className="card-body">
                                                        <p className="card-text">
                                                        <strong>  a) </strong> Case studies / Success stories.
                                                        </p>
                                                        <p className="card-text">
                                                        <strong>  b) </strong> Educational content
                                                        </p>
                                                        <p className="card-text">
                                                        <strong>  c) </strong> Talk channel content
                                                        </p>
                                                        <p className="card-text">
                                                        <strong>  d) </strong> Direcotor message
                                                        </p>
                                                       
                                                    </div>
                                                    </div>
                                                    <div className="col-md-4">
                                                    Format<br></br>
                                                    - Documents<br></br>
                                                    - Images<br></br>
                                                    - PPT / EXCEL<br></br>
                                                    - Video Files<br></br>
                                                    - Audio Files
                                                    </div>
                                                </div>
                                                </div>
                                            </p>
                                        </div>  
                                        <div className="card-body">
                                            <p className="card-text">
                                            <span className="btn btn-info">Import/Upload (Admin Rights)</span>
                                            <span className="btn btn-warning">Export / Download</span>
                                            </p>
                                        </div>
                                    </div>
                        </div>
                    </div> 
                    
                    <div className={classes.row}>
                        <div className={classes.concolumn1} style = {{backgroundColor:""}} > 
                        <div className="card bg-light mb-3"  >
                                <div className="card-header">Repository: Accessible by registered  admin / Director</div>
                                    <div className="card-body">
                                            <p className="card-text">
                                            <div className="card mb-3"  >
                                            <div className="row no-gutters">
                                                <div className="col-md-8">
                                                <div className="card-body">
                                                <p className="card-text">
                                                    <strong>  a) </strong> Psychometric test (Templates)
                                                    </p>
                                                    <p className="card-text">
                                                    <strong>  b) </strong> Session / Workshop content
                                                    </p>
                                                    <p className="card-text">
                                                    <strong>  c) </strong> Idea Investment details
                                                    </p>
                                                    <p className="card-text">
                                                    <strong>  d) </strong> Member / Partener content details
                                                    </p>
                                                </div>
                                                </div>
                                                <div className="col-md-4">
                                                Format<br></br>
                                                    - Documents <br></br>
                                                    - Images<br></br>
                                                    - PPT / EXCEL<br></br>
                                                    - Video Files<br></br>
                                                    - Audio Files<br></br>
                                                </div>
                                            </div>
                                            </div>
                                            </p>
                                        </div>  
                                        <div className="card-body">
                                            <p className="card-text">
                                            <span className="btn btn-info">Import/Upload (Admin Rights)</span>
                                            <span className="btn btn-warning">Export / Download</span>
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
 
export default KnowledgeStudio;