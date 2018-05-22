//session 默认对象的方式
export const setsession=(key,val)=>{
    val=JSON.stringify(val);
    sessionStorage.setItem(key,val);
}

export const getsession=(key)=>{
    return JSON.parse(sessionStorage.getItem(key));
}