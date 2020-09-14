import { combineReducers } from "redux";
import pageReducer from './pageReducer';
import bioReducer from './bioReducer';


export default combineReducers({
  page: pageReducer,
  aboutData: bioReducer
});

// export default combineReducers({
//   pageReducer: pageReducer,
//   tech: techReducer
// });