import * as actionType from '../action-types';

const init = {
    current: 0,
    text: '',
    bannerList: '',
    lessonList:{
        list:[],
        isMore:false,
        isLoading:false,
        pageSize:5,
        pageNumber:0
    }
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
        case actionType.AJAX_START:
            return {
                ...state,
                lessonList:{
                    ...state.lessonList,
                    isLoading:true
                }
            }
        case actionType.GET_HOME_LESSON_LIST:
            return {
                ...state,
                lessonList:{
                    ...state.lessonList,
                    list:[...state.lessonList.list,...action.lessonList],
                    isMore:true,
                    isLoading:false,
                    pageSize:5,
                    pageNumber:0
                }
            }
        default:
            return state;
    }
}