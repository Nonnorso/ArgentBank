import { combineReducers } from "redux"
import featureReducer from "../reducers/featuresReducer";


export default combineReducers ({

 features: featureReducer,

});
