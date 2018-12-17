import React, { Component } from 'react';
import PhoneListContainer from '../../containers/PhoneListContainer/PhoneListContainer';
import classes from './Layout.module.css';
class Layout extends Component {

    state = {};

    render() {

        return (
            <>
                <main className={classes.Content}>
                    <PhoneListContainer />
                </main>
            </>
        );

    }

}

export default Layout;