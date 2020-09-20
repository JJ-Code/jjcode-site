import api from "../utilities/api";
import { GET_RESUME_DATA } from "./types";

export const getResumeData = () => async dispatch => {
  const resumeJayID = '5f5eb93fcd8e5501ef098bed';

  try {
    const res = await api.get(`/resume/${resumeJayID}`);
    console.log(res);
    dispatch({
      type: GET_ABOUT_DATA,
      payload: res.data
    })

  } catch (err) {
    const errors = err.response.data.errors;
    console.log(errors)
  }


}