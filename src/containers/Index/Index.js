import React from 'react'
import classes from "./Index.module.css";
class Index extends React.Component {
    state = {  }
    render() { 
        return <div className={classes.Index}>
            Index Integration page
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
                    <h2> 3</h2>
                    <p>Some text..</p>
                </div>
            </div>
            </div>;
    }
}
 
export default Index;