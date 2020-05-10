import React from 'react';
import ReactDOM from 'react-dom';
import App from '../components/app';
import * as serviceWorker from '../../config/serviceWorkers';
import "../style/main.scss";

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();