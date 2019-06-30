import {combineReducers} from 'redux';
import userAuth from "./userAuthReducer";

const rootReducer = combineReducers({
  userAuth,
});

export default rootReducer;
