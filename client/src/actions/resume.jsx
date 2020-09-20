import api from "../utilities/api";
import { GET_RESUME_DATA, SET_LOADING } from "./types";

//Fetch data from database
export const fetchResumeData = () => async dispatch => {

  const resumeJayID = '5f5eb93fcd8e5501ef098bed';

  try {
    const data = await api.get(`/resume/${resumeJayID}`);
    console.log(data.data);
    dispatch({
      type: GET_RESUME_DATA,
      payload: data.data
    })

  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors)
  }

}



// Set loading to true
export const setLoading = (load) => {
  return {
    type: SET_LOADING,
    payload: load
  };
};