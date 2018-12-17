import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import PhoneInfoCard from '../../components/PhoneInfoCard/PhoneInfoCard';
import classes from './PhoneListContainer.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class PhoneListContainer extends Component {

    componentDidMount() {
        this.props.onFetchPhones();
    }

    render() {
        let phonesCards = <Spinner />
        if (!this.props.loading) {
            phonesCards = this.props.phones.map(details => <PhoneInfoCard key={details.id}
                brand={details.Brand}
                image={details.img}
                model={details.model}></PhoneInfoCard>)
        }
        return (
            <div className={classes.Items}>
                {phonesCards}
            </div>
        );

    }

}

const mapStateToProps = state => {
    console.log(state)
    return {
        phones: state.phones,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPhones: () => dispatch(actions.fetchPhones())
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);