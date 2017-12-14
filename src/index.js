import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'redux-zero/react';
import store from './Redux/store'
import { Routers } from './router';

const Apps = () => (
    <Provider store={store}>
      <Routers />
    </Provider>
  );

ReactDOM.render(<Apps />, document.getElementById('root'));
registerServiceWorker();
