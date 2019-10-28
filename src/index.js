// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import SwaggerUI from 'swagger-ui';
import 'swagger-ui/dist/swagger-ui.css';
SwaggerUI({
  dom_id: '#root',
  url: 'https://raw.githubusercontent.com/radiantearth/stac-spec/master/api-spec/STAC.yaml'
})
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
