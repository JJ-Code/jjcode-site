import { combineReducers } from "redux";
import pageReducer from './pageReducer';
// import techReducer from './techReducer';


export default combineReducers({
  page: pageReducer
});

// export default combineReducers({
//   pageReducer: pageReducer,
//   tech: techReducer
// });