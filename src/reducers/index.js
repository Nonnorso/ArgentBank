import { combineReducers } from "redux"
import featureReducer from "../reducers/featuresReducer";
import userReducer from '../reducers/useReducer';
import transactionsReducer from "../reducers/transactionsReducer";
import profileReducer from "../reducers/profileReducer";
import editNameReducer from "./EditNameReducer";


export default combineReducers ({

 features: featureReducer,
 transactions : transactionsReducer,
 user: userReducer,
 profile: profileReducer,
 editName : editNameReducer
});
