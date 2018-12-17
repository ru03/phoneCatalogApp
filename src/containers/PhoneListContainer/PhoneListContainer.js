import React, { Component } from 'react';
import PhoneInfoCard from '../../components/PhoneInfoCard/PhoneInfoCard';
import classes from './PhoneListContainer.module.css';

const list = [{name: 'iphone', desc: 'Some desc'}, {name: 'samsung', desc: 'some desc 2'}, {name: 'iphone', desc: 'Some desc'}, {name: 'iphone', desc: 'Some desc'}, {name: 'iphone', desc: 'Some desc'}];
class PhoneListContainer extends Component {

    state = {};

    render() {
        let data = list.map(info => <PhoneInfoCard key={info.name} name={info.name} desc={info.desc}></PhoneInfoCard>)
        return (
            <div className={classes.Items}>
                {data}
            </div>
        );

    }

}

export default PhoneListContainer;