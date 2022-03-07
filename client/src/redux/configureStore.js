import { createStore, compose, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import reduxThunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';

import reducer from '../reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['events'],
};

const pReducer = persistReducer(persistConfig, reducer);
const middleware = applyMiddleware(reduxThunk);
const store = createStore(pReducer, composeEnhancers(middleware));

const persistor = persistStore(store);

export { persistor, store };
