import { type } from "./../Type/Type";

//定义处理函数
export function switchMenu(menuName) {
  return{
    type: type.SWITCH_MENU,
    menuName
  }
}