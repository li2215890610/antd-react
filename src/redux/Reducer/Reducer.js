

import { type } from "./../Type/Type";
//数据处理

const initialState = {
  menuName:"首页",
}


export default ( state = initialState, action)=>{
  switch (state) {
    case type.SWITCH_MENU:

      return {
        ...state, //保存以前的值
        menuName:action.menuName
      }
      break;
    default:
      return {
        ...state,
      } 
      break;
  }
}