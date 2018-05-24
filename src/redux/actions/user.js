import * as actionType from '../action-types';
import {set_user,get_user} from '../../http-server/user';

//注册
export const reg_user=(user)=>(dispatch)=>{
    const data=set_user(user);
    if(data.err){
        dispatch({
            type:actionType.ERR_USER,
            err:data
        })
    }else{
        dispatch({
            type:actionType.SET_USER,
            data:data
        })
    }
}
//登陆
export const login_user=(user)=>(dispatch)=>{
    const data=get_user(user);
    if(data.err){
        dispatch({
            type:actionType.ERR_USER,
            err:data
        })
    }else{
        dispatch({
            type:actionType.GET_USER,
            data:data
        })
    }
}