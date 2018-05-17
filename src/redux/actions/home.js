import * as actionType from '../action-types';

export const check_lesson=(val,text)=>{
    return {
        type:actionType.CHECK_LESSON,
        val,text
    }
}