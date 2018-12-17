import React from 'react';
import classes from './Spinner.module.css';
import Backdrop from './../Backdrop/Backdrop';
const spinner = (props) => (
    <>
        <Backdrop></Backdrop>
        <div className={classes.spinner}>
            <div className={classes.doubleBounce1}></div>
            <div className={classes.doubleBounce2}></div>
        </div>
    </>
)

export default spinner;