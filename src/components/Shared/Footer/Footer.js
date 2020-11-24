import React, { Component } from 'react';
import classes from './Footer.module.css';
class Footer extends Component {
    state = {  }
    render() { 
        return <React.Fragment>
             <div className={classes.Footer}  >
                    Copyright @ 2020 <a href="https://www.vichag.com/copy-of-home" rel="noopener noreferrer" target="_blank">www.vichag.com</a>
                </div>
        </React.Fragment>;
    }
}
 
export default Footer;