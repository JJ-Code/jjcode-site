import { combineReducers } from "redux";
import pageReducer from './pageReducer';
import bioReducer from './bioReducer';
import resumeReducer from './resumeReducer';

export default combineReducers({
  page: pageReducer,
  aboutData: bioReducer,
  resumeData: resumeReducer

});

// export default combineReducers({
//   pageReducer: pageReducer,
//   tech: techReducer
// });