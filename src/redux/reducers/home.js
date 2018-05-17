import * as actionType from '../action-types';

const init={
    current:0,
    text:''
}
export default (state=init,action)=>{
    switch(action.type){
        case actionType.CHECK_LESSON:
            return {
                ...state,
                current:action.val,
                text:action.text
            }
        default:
            return state;
    }
}