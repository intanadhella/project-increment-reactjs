import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import reducer from './reducer';
import { createStore } from 'redux';
import View from './components/View';

const store = createStore(reducer)

export default () => {
  return (
    <Provider store={store}>
      <View />
    </Provider>
  )
}