
/**
 * 
 * 引入createStore创建store
 */

import { createStore } from 'redux';

import Reducer from "./../Reducer/Reducer";

const initialState = {
  menuName: ''
}
const configureStore = () => createStore(Reducer);

export default {
  configureStore
};