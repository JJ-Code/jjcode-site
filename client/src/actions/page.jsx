import { SET_LOADING, SET_URL } from "./types";


// set loading
export const loading= () => dispatch => {
  dispatch({ type: SET_LOADING });

};

// get url
export const setURL = url => dispatch => {
  console.log(url);
  dispatch({
    type: SET_URL
  ,
    payload: url
  });

};