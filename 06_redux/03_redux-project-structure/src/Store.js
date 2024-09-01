import rootReducer from './modules';            // 해당 폴더의 index.js 폴더를 읽어옴
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk';

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;