import * as actionType from '../action-types';

const init = {
    current: 0,
    text: '',
    bannerList: null
}
export default (state = init, action) => {
    switch (action.type) {
        case actionType.CHECK_LESSON:
            return {
                ...state,
                current: action.val,
                text: action.text
            }
        case actionType.GET_HOME_BANNER_IMG:
            return {
                ...state,
                bannerList:action.bannerList
            }
        default:
            return state;
    }
}