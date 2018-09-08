import React from 'react';
import ReactDOM from 'react-dom';


import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import Life from "./pages/demo/Life";

// import Admin from "./Admin";


// import Home from "./pages/route_demo/route1/Home";
// import Home from "./pages/route_demo/route2/router";

import Router from "./router";

ReactDOM.render(<Router />, document.getElementById('root'));

registerServiceWorker();
