import React from 'react'
import classes from "./AboutUs.module.css";
class AboutUs extends React.Component {
    state = {  }
    render() { 
        return <div className={classes.AboutUs}>AboutUs
                <div className={classes.row}>
                <div className={classes.column} style = {{backgroundColor:""}} >
                    <h2>  1</h2>
                    <p>Some text..</p>
                </div>
                <div className={classes.column} style = {{backgroundColor:""}}  >
                    <h2>  2</h2>
                    <p>Some text..</p>
                </div>
                <div className={classes.column} style = {{backgroundColor:"cc"}}  >
                    <h2>  3</h2>
                    <p>Some text..</p>
                </div>
            </div>
                </div>;
    }
}
 
export default AboutUs;