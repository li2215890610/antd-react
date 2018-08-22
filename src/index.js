import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// import Life from "./pages/demo/Life";

import Admin from "./Admin";

ReactDOM.render(<Admin />, document.getElementById('root'));
registerServiceWorker();
