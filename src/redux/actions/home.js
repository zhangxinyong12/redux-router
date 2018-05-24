import * as actionType from '../action-types';
import {home_banner} from '../../http-server/home';
import {GET} from '../../http-server/http-model';
export const check_lesson=(val,text)=>{
    return {
        type:actionType.CHECK_LESSON,
        val,text
    }
}
//使用 redux-thunk
export const get_banner=(url,options)=>(dispatch,getState)=>{
    home_banner(url,options).then(bannerList=>{
        dispatch({
            type:actionType.GET_HOME_BANNER_IMG,
            bannerList
        })
    })
}
//获取列表
export const get_lesson=(url)=>(dispatch,getState)=>(
    dispatch({
        type:actionType.AJAX_START
    }),
    GET(url).then(data=>{
        const lessonList=data.showapi_res_body;
            dispatch({
                type:actionType.GET_HOME_LESSON_LIST,
                lessonList
            })
        
    })
)
