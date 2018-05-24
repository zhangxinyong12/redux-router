import {GET,POST} from './http-model';
import {setsession,getsession} from '../utils';//session 模拟ajax请求
//封装成promise
export const set_user=(user)=>{
    const {username}=getsession('user');
    if(user.username==='123456'){
        return {err:'用户已经存在'};
    }else{
        setsession('user',user)
        return {user:user['username']}
    }
}
export const get_user=(user)=>{
    const {username,password}=getsession('user')||{};
    if(username!==user['username']||password!==user['password']){
        return {err:'用户名或密码错误'};
    }else{
        return {user:user['username']}
    }
}