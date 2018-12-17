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

export const fetchPhones = () => {
    return dispatch => {
        dispatch(fetchPhonesStart());
        axios.get( '/phones' )
            .then( res => {
                const fetchedPhones = [];
                console.log(res.data);
                for ( let key in res.data ) {
                    fetchedPhones.push( {
                        ...res.data[key],
                        id: key
                    } );
                }
                dispatch(fetchPhonesSuccess(fetchedPhones));
            })
            // .catch( err => {
            //     dispatch(fetchPhonesFail(err));
            // } );
    };
};