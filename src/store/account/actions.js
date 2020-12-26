import { GET_ACCOUNT_LIST, GET_ACCOUNT_PENDING } from './actions.type';

import { getApi } from '../../util/api';

export const getAccountList = (param) => {
    return dispatch => {
        dispatch({ type:GET_ACCOUNT_PENDING });
        return getApi('/bUgMRhYjKG', param).then(response => {
            dispatch({
                type: GET_ACCOUNT_LIST,
                payload: response
            });
        });
    };
}
