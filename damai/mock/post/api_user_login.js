module.exports = function(reg){
  const success = 0;  //0成功
  const errorCode = "000";
  const msg = "登陆成功";
  const user = {
    name:"www",
    age:12,
    sex:"男"
  }
  return{
    success,
    errorCode,
    msg,
    user
  }
}
