import * as actionTypes from './actionTypes';
import axios from './../../config/axios-conf';

export const fetchPhonesSuccess = ( phones ) => {
    return {
        type: actionTypes.FETCH_PHONES_SUCCESS,
        phones: phones
    };
};

export const fetchPhonesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_PHONES_FAIL,
        error: error
    };
};

export const fetchPhonesStart = () => {
    return {
        type: actionTypes.FETCH_PHONES_START
    };
};

export const getPhoneByID = (phone) => {
    return {
        type: actionTypes.GET_PHONE_BY_ID,
        phone: phone
    };
};

export const fetchPhones = () => {
    return dispatch => {
        dispatch(fetchPhonesStart());
        axios.get( '/phones' )
            .then( res => {
                const fetchedPhones = [];
                res.data.forEach(device => fetchedPhones.push(device));
                dispatch(fetchPhonesSuccess(fetchedPhones));
            })
            .catch( err => {
                dispatch(fetchPhonesFail(err));
            } );
    };
};

export const getPhone = (id) => {
    return (dispatch, getState) => {
        const phones = getState().phones;
        const phone = phones.filter(phone => phone.id === id);
        dispatch(getPhoneByID(phone));
    }
}