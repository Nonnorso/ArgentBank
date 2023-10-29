import { combineReducers } from "redux"
import featureReducer from "../reducers/featuresReducer";
import userReducer from '../reducers/useReducer';


export default combineReducers ({

 features: featureReducer,
user: userReducer,
});
