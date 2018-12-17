import * as actionTypes from '../actions/actionTypes';

const initialState = {
    phones: [],
    loading: false
};

const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

const fetchPhonesStart = (state, action) => {
    return updateObject(state, { loading: true });
};

const fetchPhonesSuccess = (state, action) => {
    return updateObject(state, {
        phones: action.phones,
        loading: false
    });
};

const fetchPhonesFail = (state, action) => {
    return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PHONES_START:
            return fetchPhonesStart(state, action);
        case actionTypes.FETCH_PHONES_SUCCESS:
            return fetchPhonesSuccess(state, action);
        case actionTypes.FETCH_PHONES_FAIL:
            return fetchPhonesFail(state, action);
        default:
            return state;
    }
};

export default reducer;