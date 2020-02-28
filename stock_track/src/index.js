import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Start from './Start';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Start />, document.getElementById('root'));

serviceWorker.unregister();
