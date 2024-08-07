import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { persistor, store } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as Element
);
root.render(
<React.StrictMode>
   <Provider store={store}>
     <PersistGate persistor={persistor}>
       <HashRouter>
         <App />
       </HashRouter>
    </PersistGate>
  </Provider>
</React.StrictMode>
);

