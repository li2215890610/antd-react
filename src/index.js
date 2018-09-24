import React from 'react';
import ReactDOM from 'react-dom';

import {  LocaleProvider } from 'antd';

import zhCN from 'antd/lib/locale-provider/zh_CN';

import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import Life from "./pages/demo/Life";

// import Admin from "./Admin";


// import Home from "./pages/route_demo/route1/Home";
// import Home from "./pages/route_demo/route2/router";

import Router from "./router";

ReactDOM.render(
  <LocaleProvider locale={zhCN}>
    <Router />
  </LocaleProvider>

, document.getElementById('root'));

registerServiceWorker();
