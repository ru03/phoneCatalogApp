import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

import PhoneInfoCard from '../../components/PhoneInfoCard/PhoneInfoCard';
import PhoneDetailComponent from '../../components/PhoneDetailComponent/PhoneDetailComponent';
import classes from './PhoneListContainer.module.css';
import Spinner from '../../components/UI/Spinner/Spinner';

class PhoneListContainer extends Component {

    componentDidMount() {
        this.props.onFetchPhones();
    }

    handlerClickDetailDevice = (id) => {
        this.props.onFilterPhone(id);
        console.log(this.props.phone)
    }

    render() {
        let phonesCards = <Spinner />
        let phoneDetail = null;
        if (!this.props.loading) {
            phonesCards = this.props.phones.map(details => <PhoneInfoCard key={details.id}
                brand={details.Brand}
                image={details.img}
                model={details.model}
                id={details.id}
                clicked={this.handlerClickDetailDevice}></PhoneInfoCard>)
        }

        if (this.props.phone.length > 0) {
            phoneDetail = this.props.phone.map(phoneDetail => <PhoneDetailComponent key={phoneDetail.id}
                                                                                    image={phoneDetail.img}
                                                                                    model={phoneDetail.model}
                                                                                    brand={phoneDetail.Brand}
                                                                                    colors={phoneDetail.colors}
                                                                                    price={phoneDetail.price}
                                                                                    screen={phoneDetail.type} />)
        }
        return (
            <>
                <div className={classes.Items}>
                    {phonesCards}
                </div>
                <div>
                    {phoneDetail}
                </div>
            </>
        );

    }

}

const mapStateToProps = state => {
    return {
        phones: state.phones,
        phone: state.phone,
        loading: state.loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchPhones: () => dispatch(actions.fetchPhones()),
        onFilterPhone: (id) => dispatch(actions.getPhone(id))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(PhoneListContainer);