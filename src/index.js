import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import ShowItems from './containers/ShowItems';
import './index.css'

import rootReducer from './reducers/index';

const store = createStore(rootReducer);

ReactDOM.render((
  <Provider store={store} style={{height: "100%",}}>
    <ShowItems/>
  </Provider>
  ), document.getElementById('root'));
