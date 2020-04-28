import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { createStore } from 'redux'; 
import postListReducer from './reducers/post-list-reducer';
import { Provider } from 'react-redux';  

const store = createStore(
  postListReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

store.subscribe(() =>
  console.log(store.getState())
);  

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);