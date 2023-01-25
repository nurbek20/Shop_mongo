import { rootReducer } from './reducer/root-reducer';
import { applyMiddleware, createStore } from 'redux';
import thunk from "react-redux";
import {composeWithDevtools} from "redux-devtools-extension"


const store=createStore(
    rootReducer,
    composeWithDevtools(applyMiddleware(thunk))
)
export default store;