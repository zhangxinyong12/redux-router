import * as actionType from '../action-types';
import {home_banner} from '../../http-server/home';
export const check_lesson=(val,text)=>{
    return {
        type:actionType.CHECK_LESSON,
        val,text
    }
}
//使用 redux-thunk
export const get_banner=(url,options)=>(dispatch)=>{
    home_banner(url,options).then(bannerList=>{
        dispatch({
            type:actionType.GET_HOME_BANNER_IMG,
            bannerList
        })
    })
}