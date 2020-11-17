import React from 'react'
import classes from "./AffliationsEvents.module.css";
class AffliationsEvents extends React.Component {
    state = {  }
    render() { 
        return <div className={classes.AffliationsEvents}>
           AffliationsEvents
            <div className={classes.toprow}>
                <div className={classes.topcolumn1} style = {{backgroundColor:""}} >
                    <h2>  1</h2>
                </div>
                <div className={classes.topcolumn2} style = {{backgroundColor:""}}  >
                    <h2>  3</h2>
                </div>
            </div>
            <div className={classes.row}>
                <div className={classes.column} style = {{backgroundColor:""}} >
                    <h2>  1</h2>
                    <p>Some text..</p>
                </div>
                <div className={classes.column} style = {{backgroundColor:""}}  >
                    <h2>  2</h2>
                    <p>Some text..</p>
                </div>
                <div className={classes.column} style = {{backgroundColor:""}}  >
                    <h2>3</h2>
                    <p>Some text..</p>
                </div>
            </div>
            </div>;
    }
}
 
export default AffliationsEvents;