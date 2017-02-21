import 'whatwg-fetch';
import React from 'react';
import { render } from 'react-dom';
import { Provider  } from 'react-redux';
import thunk from 'redux-thunk';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import AppContainer from './client/components/app-container';
import './client/styles/main.scss';
import {getDeviceInfo} from './client/device';
import {debounce} from './client/utils/utils';

import appReducer from './client/reducers/app-reducer';
import tracksReducer from './client/reducers/tracks-reducer';

const store = createStore(combineReducers({
  app: appReducer,
  tracks: tracksReducer
}), applyMiddleware(thunk));

function setDevice() {
  store.dispatch({
    type: 'SET_DEVICE',
    device: getDeviceInfo()
  });
}

setDevice();
const debouncedSetDevice = debounce(setDevice, 200);
window.addEventListener('resize', debouncedSetDevice);

window.onscroll = () => {
  store.dispatch({
    type: 'SET_SCROLL_VAL',
    scrollVal: document.documentElement.scrollTop || document.body.scrollTop
  });
};

render(<Provider store={store}>
  <AppContainer/>
</Provider>, document.querySelector('#app-root'));