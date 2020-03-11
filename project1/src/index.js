/*****************************/
/* Daniel Janis              */
/* Project 1 - Star Wars API */
/* index.js                  */
/*****************************/


import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
/* More info at -----> react.semantic-ui.com/usage/ <----- */
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
// For the app to work offline and load faster,
// change the below to register()

// Change back to unregister() if you  want to work online
serviceWorker.register();