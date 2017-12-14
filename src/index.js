import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'redux-zero/react';
import store from './Redux/store'

const Apps = () => (
    <Provider store={store}>
      <App />
    </Provider>
  );

ReactDOM.render(<Apps />, document.getElementById('root'));
registerServiceWorker();
