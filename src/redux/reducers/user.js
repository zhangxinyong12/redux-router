import * as actionType from '../action-types';
const init = {
    userInfo: {},
    err: ''
};
export default (state = init, action) => {
    switch (action.type) {
        case actionType.ERR_USER:
            return {
                ...state,
                userInfo: {},
                err: action.err
            }
        case actionType.SET_USER:
            return {
                ...state,
                userInfo: action.data,
                err: '',

            }
        case actionType.GET_USER:
            return {
                ...state,
                userInfo: action.data,
                err: '',

            }
        default:
            return state;
    }
}