import { combineReducers } from "redux"
import featureReducer from "../reducers/featuresReducer";
import userReducer from '../reducers/useReducer';
import transactionsReducer from "../reducers/transactionsReducer";


export default combineReducers ({

 features: featureReducer,
 transactions : transactionsReducer,
 user: userReducer,
});
