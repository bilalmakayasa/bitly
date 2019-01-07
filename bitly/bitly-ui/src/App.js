import React, { Component } from 'react';
import {Provider} from 'react-redux'
import {store, persistor} from './redux/store'
import './App.css'
import AppRouter from './AppRouter';
import { PersistGate } from 'redux-persist/integration/react';

class App extends Component {
  render() {
    return (
    <Provider store = {store} >
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter/>
      </PersistGate>
    </Provider>

    );
  }
}

export default App;
