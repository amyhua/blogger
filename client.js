import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './components/App/App';
import reducer from './reducers';

const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
  window.__REDUX_DEVTOOLS_EXTENSION__()
);

// TODO ES6-ify everything
ReactDOM.render(
	<Provider store={store}>
	  <App />
	</Provider>,
  document.getElementById('root')
);