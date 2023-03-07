import {applyMiddleware, createStore} from 'redux';
import Navigation from './Navigation';
import rootReducer from './store/reducers';
import ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(ReduxThunk)) );

export default function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}
